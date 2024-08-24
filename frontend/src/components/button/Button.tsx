import React, { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

type BtnClassName = 
  "primary" | 
  "secondary" | 
  "warning" | 
  "cancel" | 
  "adding" | 
  "delete";

type BtnType = "submit" | "button";

// type LinksType = "/" | "/home"

type Props = {
  children: ReactNode;
  className: BtnClassName;
  type: BtnType;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  to?: string;
}

const Button = ({ children, className = "primary", type = "button", onClick, to = "/" }: Props) => {
  if(to){
    return (
      <NavLink to={to} className={className}>
        { children }
      </NavLink>
    
    )
  }
    return (
        <button
          className={className}
          type={type}
          onClick={onClick}
        >
          {children}
        </button>
  
)
}

export default Button