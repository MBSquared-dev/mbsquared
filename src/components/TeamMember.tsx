
import { ReactNode } from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  imageSrc: string;
  socialLinks?: ReactNode;
}

const TeamMember = ({ 
  name, 
  role, 
  bio, 
  imageSrc, 
  socialLinks 
}: TeamMemberProps) => {
  return (
    <div className="group flex flex-col items-center text-center h-full">
      <div className="mb-4 overflow-hidden rounded-full w-48 h-48 border-4 border-white dark:border-gray-800 shadow-md transition-transform duration-500 group-hover:scale-105">
        <img 
          src={imageSrc} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <h3 className="text-xl font-semibold">{name}</h3>
      <div className="text-primary text-sm font-medium mb-3">{role}</div>
      <p className="text-muted-foreground text-sm mb-4 max-w-xs">{bio}</p>
      {socialLinks && (
        <div className="flex justify-center space-x-4 mt-auto">
          {socialLinks}
        </div>
      )}
    </div>
  );
};

export default TeamMember;
