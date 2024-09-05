import React, { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import Style from '../../styles/Button.module.css';

type BtnClassName = 
  "primary" | 
  "secondary" | 
  "warning" | 
  "cancel" | 
  "adding" | 
  "delete" |
  "clean";

type BtnType = "submit" | "button";

type Props = {
  children: ReactNode;
  className: BtnClassName;
  type: BtnType;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  to?: string;
}

const Button = ({ children, className = "primary", type, onClick, to }: Props) => {
  if(to){
    return (
      <NavLink to={to} className={Style[className]}>
        { children }
      </NavLink>
    
    )
  }
    return (
        <button
          className={Style[className]}
          type={type}
          onClick={onClick}
        >
          {children}
        </button>
  
)
}

export default Button;