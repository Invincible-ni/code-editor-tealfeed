// src/CodeEditor.js
import React, { useState, useCallback } from 'react';
import Prism from 'prismjs';
import "prismjs/themes/prism.css";
import { Highlight, themes } from 'prism-react-renderer';
import './CodeEditor.css';

const CodeEditor = () => {
  const [code, setCode] = useState('');

  const handleChange = useCallback((e) => {
    setCode(e.target.value);
  }, []);

  return (
    <div className="editor-container">
      <Highlight
        theme={themes.vsDark}
        Prism={Prism}
        code={code}
        language="javascript"
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
      <textarea
        className="textarea"
        value={code}
        onChange={handleChange}
        spellCheck="false"
      />
    </div>
  );
};

export default CodeEditor;
