import React, {} from 'react'
import PauseIcon from '@mui/icons-material/Pause';
import StopIcon from '@mui/icons-material/Stop';
import CachedIcon from '@mui/icons-material/Cached';
import CheckIcon from '@mui/icons-material/Check';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import SettingsIcon from '@mui/icons-material/Settings';
import SendBtn from './SendBtn';
import ImportBtn from './actionButtons/ImportBtn';
import ExportBtn from './actionButtons/ExportBtn';
function Header() {


  return (
    <React.Fragment>
      <div className='h-20 bg-[#d5d6d6] border-b border-black flex items-center p-2 gap-1'>
        
        <SendBtn />

        <span className='flex flex-col justify-center items-center cursor-pointer hover:bg-blue-300 p-3 hover:bg-opacity-25'>
          <PauseIcon className='text-[#a5a5a5]' fontSize='large' />
          <span className='text-black text-xs'>Pause</span>
        </span>

        <span className='flex flex-col justify-center items-center cursor-pointer hover:bg-blue-300 p-3 hover:bg-opacity-25'>
          <StopIcon className='text-[#646b66]' fontSize='large' />
          <span className='text-black text-xs'>Stop</span>
        </span>

        <span className='flex flex-col justify-center items-center cursor-pointer hover:bg-blue-300 p-3 hover:bg-opacity-25'>
          <CachedIcon className='text-blue-900' fontSize='large' />
          <span className='text-black text-xs'>Reset</span>
        </span>

        <ImportBtn />

        <ExportBtn />

        <span className='flex flex-col justify-center items-center cursor-pointer hover:bg-blue-300 p-3 hover:bg-opacity-25'>
          <CheckIcon className='text-blue-500 font-bold' fontSize='large' />
          <span className='text-black text-xs'>SpamCheck</span>
        </span>

        <span className='flex flex-col justify-center items-center cursor-pointer hover:bg-blue-300 p-3 hover:bg-opacity-25'>
          <LeaderboardIcon className='text-red-600 font-bold' fontSize='large' />
          <span className='text-black text-xs'>Statistic</span>
        </span>

        <span className='flex flex-col justify-center items-center cursor-pointer hover:bg-blue-300 p-3 hover:bg-opacity-25'>
          <HeadsetMicIcon className='text-blue-900 font-bold' fontSize='large' />
          <span className='text-blue-900 text-xs'>Help</span>
        </span>

        <span className='flex flex-col justify-center items-center cursor-pointer hover:bg-blue-300 p-3 hover:bg-opacity-25'>
          <SettingsIcon className='text-[#646b66] font-bold' fontSize='large' />
          <span className='text-black text-xs'>Preferences</span>
        </span>

      </div>
    </React.Fragment>
  )
}

export default Header
