// noteNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';

export const NoteNode = ({ id, data }) => {
    const [note, setNote] = useState(data.note || 'Enter note here...');

    const handleNoteChange = (e) => {
        setNote(e.target.value);
    };

    const content = (
        <div className="note-node-content" style={{ background: '#fffae3' }}>
            <div className="node-header">
                <span>Note</span>
            </div>
            <div className="node-body">
                <textarea
                    value={note}
                    onChange={handleNoteChange}
                    rows={4}
                    style={{ width: '100%', background: 'transparent', border: 'none' }}
                />
            </div>
        </div>
    );

    // Note node might not have handles, or just purely for visual annotation.
    // But to be consistent let's add no handles.
    const handles = [];

    return (
        <BaseNode
            id={id}
            content={content}
            handles={handles}
            style={{ background: '#fffae3' }} // Override style
        />
    );
}
