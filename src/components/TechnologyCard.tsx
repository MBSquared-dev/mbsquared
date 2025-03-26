import React from 'react';

interface Technology {
  name: string;
  logo?: string;
}

interface TechnologySectionProps {
  title: string;
  technologies: Technology[];
}

const TechnologyCard: React.FC<TechnologySectionProps> = ({ title, technologies }) => {
  return (
    <div className="mt-4 mb-4">
      <h4 className="text-lg font-semibold mb-6 text-center">{title}</h4>
      <div className="grid grid-cols-2 gap-6">
        {technologies.map((tech) => (
          <div key={tech.name} className="flex flex-col items-center text-center">
            <div className="h-16 w-16 mb-3 flex items-center justify-center">
              {/* TODO: Add logos */}
              {/* {tech.logo ? (
                <img
                  src={tech.logo}
                  alt={`${tech.name} logo`}
                  className="object-contain h-full w-full"
                />
              ) : null} */}
            </div>
            <span className="text-muted-foreground font-medium">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologyCard; 