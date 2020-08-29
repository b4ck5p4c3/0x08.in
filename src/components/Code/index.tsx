import React from 'react';
import styled from 'styled-components';
import vsDark from 'prism-react-renderer/themes/vsDark';
import Highlight, {defaultProps} from 'prism-react-renderer';

import {Props} from './types'; 

const Pre = styled.pre`
	padding: 1rem;
`;

const Line = styled.div`
	display: flex;
`;

const LineNumber = styled.span`
	user-select: none;
	min-width: 30px;
	color: #3e5059;
`;

export default ({children, className}: Props) => {
	const language = className.replace(/language-/, '');

  return (
		// @ts-ignore
    <Highlight {...defaultProps} code={children} language={language} theme={vsDark}>
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <Pre className={className} style={{...style}}>
          {tokens.map((line, i) => (
						<Line>
							<LineNumber>{++i}</LineNumber>
							<div key={i} {...getLineProps({line, key: i})}>
								{line.map((token, key) => (
									<span key={key} {...getTokenProps({token, key})} />
								))}
							</div>
						</Line>
          ))}
        </Pre>
      )}
    </Highlight>
  );
}