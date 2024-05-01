import React, { useState } from 'react';
import { Timeline, TimelineItem, Input, Button, Avatar } from '@ui5/webcomponents-react';

const Feed = () => {
    const [posts, setPosts] = useState([]);
    const [postValue, setPostValue] = useState('');

    const handlePost = () => {
        if (postValue.trim() === '') {
            // Don't allow empty posts
            return;
        }
    
        const now = new Date();
        const timestamp = now.toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
            day: 'numeric',
            month: 'numeric',
            year: '2-digit'
        });
    
        const newPost = {
            text: postValue,
            author: 'John Doe', // Replace with the actual author
            timestamp: timestamp,
        };
        setPosts([newPost, ...posts]);
        setPostValue('');
    };

    return (
        <div>

            <Timeline style={{ maxHeight: '300px', overflow: 'auto' }}>
                {posts.map((post, index) => (
                <TimelineItem
                    key={index}
                    titleText={post.author}
                    subtitleText={post.timestamp}
                    icon={<Avatar image="https://example.com/avatar.jpg" />} // Replace with the actual avatar
                    style={{ width: '50%', margin: '10px auto' }}
                >
                    {post.text}
                </TimelineItem>
                ))}
            </Timeline>

            <Input value={postValue} onInput={(e) => setPostValue(e.target.value)} />
            <Button onClick={handlePost}>Post</Button>
        </div>
    );
};

export default Feed;