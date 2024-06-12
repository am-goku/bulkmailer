import React, { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'

const SessionContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useSession = () => useContext(SessionContext);

function SessionProvider({ children }) {

  const [account, setAccount] = useState(null);
  const [group, setGroup] = useState(null);
  const [email, setEmail] = useState(null);

  const [csvGroup, setCsvGroup] = useState(null);

  return (
    <React.Fragment>
      <SessionContext.Provider value={{account, group, email, setAccount, setGroup, setEmail, csvGroup, setCsvGroup}}>
        {children}
      </SessionContext.Provider>
    </React.Fragment>
  )
}

SessionProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SessionProvider