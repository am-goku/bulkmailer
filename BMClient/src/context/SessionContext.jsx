/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useAppSelector } from '../utils/store';
import { useDispatch } from 'react-redux';
import { setNewEmailGroup, updateEmailGroup } from '../utils/reducer';

const SessionContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useSession = () => useContext(SessionContext);

function SessionProvider({ children }) {

  const [account, setAccount] = useState(null);
  const [group, setGroup] = useState(null);
  const [email, setEmail] = useState(null);

  const [csvGroup, setCsvGroup] = useState(null);

  const dispatch = useDispatch()
  const emailGroup = useAppSelector(state => state?.groupReducer?.emailGroup)


  const manageCsv = useCallback(() => {
    if (group) {
      const updatedGroup = {
        ...group,
        ['recipients']: [...group.recipients, ...csvGroup]
      }
      setGroup(updatedGroup)
      dispatch(updateEmailGroup(updatedGroup))
    } else {
      const newGroup = {
        id: emailGroup?.length + 1,
        name: `Group ${emailGroup?.length + 1}`,
        recipients: csvGroup
      }
      dispatch(setNewEmailGroup(newGroup))
      setGroup(newGroup)
    }
    setCsvGroup(null)
  }, [group, csvGroup, emailGroup])

  useEffect(() => {
    if (csvGroup) {
      manageCsv()
    }
  }, [csvGroup])



  return (
    <React.Fragment>
      <SessionContext.Provider value={{ account, group, email, setAccount, setGroup, setEmail, csvGroup, setCsvGroup }}>
        {children}
      </SessionContext.Provider>
    </React.Fragment>
  )
}

SessionProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SessionProvider