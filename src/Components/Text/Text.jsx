import React from 'react'

export default function Text({ className, id, text }) {
    return (
        <div>
            <p
                className={className}
                id={id}>
                {text}
            </p>
        </div>
    );
}
