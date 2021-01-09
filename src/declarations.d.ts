declare module "\*.jpg" {
  const content: string;
  export default content;
}

declare module "\*.png" {
  const content: string;
  export default content;
}

declare module "\*.webp" {
  const content: string;
  export default content;
}

declare module "\*.gif" {
  const content: string;
  export default content;
}

declare module "\*.svg" {
  const content: string;
  export default content;
}

declare module "\*.json" {
  const content: string;
  export default content;
}

declare module '@mdx-js/react' {
  import * as React from 'react'
  type ComponentType =
    | 'a'
    | 'blockquote'
    | 'code'
    | 'delete'
    | 'em'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'hr'
    | 'img'
    | 'inlineCode'
    | 'li'
    | 'ol'
    | 'p'
    | 'pre'
    | 'strong'
    | 'sup'
    | 'table'
    | 'td'
    | 'thematicBreak'
    | 'tr'
    | 'ul';

  export type Components = {
    [key in ComponentType]?: React.Component | React.Element 
  }

  export interface MDXProviderProps {
    children: React.ReactNode
    components: Components
  }

  export class MDXProvider extends React.Component<MDXProviderProps> {}
}