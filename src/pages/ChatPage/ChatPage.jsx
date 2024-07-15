import React from 'react';
import Sidebar from '../../ChatComponents/sidebar/Sidebar';
import MessageContainer from '../../ChatComponents/messages/MessageContainer';

const ChatPage = () => {
    return (
        <div>
            <Sidebar />
            <MessageContainer />
        </div>
    );
};

export default ChatPage;


const StyleSheet = {
    element: {
        display: 'flex',
        overflow: 'hidden',
        backgroundColor: '#ccc',
        backdropfilter: 'blur(5px)',
        backgroundclip: 'padding-box',
        borderRadius: '0.5rem',
        bg: 'rgba(192, 192, 192, 0.1)',
    }
}

