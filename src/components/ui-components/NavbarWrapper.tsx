
import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLocation } from 'react-router-dom';

interface NavbarWrapperProps {
  showLandingToggle?: boolean;
}

const NavbarWrapper = ({ showLandingToggle }: NavbarWrapperProps) => {
  const location = useLocation();
  const isOnLanding = location.pathname === '/landing';
  
  return (
    <div className="relative">
      <Navbar />
      
      {showLandingToggle && (
        <div className="absolute top-4 right-4">
          <Link to={isOnLanding ? '/' : '/landing'}>
            <Button variant="outline" size="sm">
              {isOnLanding ? 'Main App' : 'Landing Page'}
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavbarWrapper;
