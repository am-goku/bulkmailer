import React, { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'

const SessionContext = createContext();

export const useSession = () => useContext(SessionContext);

function SessionProvider({ children }) {

  const [account, setAccount] = useState(null);
  const [group, setGroup] = useState(null);
  const [email, setEmail] = useState({ subject: '', body: '' });

  return (
    <React.Fragment>
      <SessionContext.Provider value={{account, group, email, setAccount, setGroup, setEmail}}>
        {children}
      </SessionContext.Provider>
    </React.Fragment>
  )
}

SessionProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SessionProvider