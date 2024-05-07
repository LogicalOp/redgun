import React, { useState } from 'react';
import { Card, Input, Avatar, Button } from "@ui5/webcomponents-react";

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
        <>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center',
                maxHeight: '60vh', // Adjust this value as needed
                width: '50%',
                overflowY: 'auto' 
            }}>
                {posts.map((post, index) => (
                    <Card
                        key={index}
                        style={{ width: '50%', margin: '10px auto', alignItems: 'center' }}
                    >
                        <div>
                            <h4>{post.author}</h4>
                            <p>{post.timestamp}</p>
                            <p>{post.text}</p>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Input value={postValue} onInput={(e) => setPostValue(e.target.value)} />
            <Button onClick={handlePost}>Post</Button>
        </div>
        </>
    );
};

export default Feed;