import './text.css'

export default function Text({ children, className = '', as = 'p' }) {
  const Component = as;
  return <Component className={`text ${className}`}>{children}</Component>;
}




