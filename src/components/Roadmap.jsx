import { MapPin, Calendar } from 'lucide-react';

const Roadmap = () => {
  const milestones = [
    {
      year: '2026',
      certification: 'AZ-900',
      description: 'Microsoft Azure Fundamentals'
    },
    {
      year: '2027',
      certification: 'AZ-104',
      description: 'Microsoft Azure Administrator Associate'
    },
    {
      year: '2028',
      certification: 'CCNA',
      description: 'Cisco Certified Network Associate'
    },
    {
      year: '2029',
      certification: 'AZ-305',
      description: 'Microsoft Azure Solutions Architect Expert'
    }
  ];

  return (
    <section id="roadmap" className="py-20 bg-slate-dark text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <MapPin className="mx-auto mb-4 text-azure-blue" size={48} />
          <h2 className="text-3xl font-bold">3-Year Roadmap</h2>
        </div>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-azure-blue"></div>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-azure-blue rounded-full flex items-center justify-center">
                  <Calendar size={24} className="text-white" />
                </div>
                <div className="ml-6 bg-slate-800 rounded-lg p-6 flex-1">
                  <div className="flex items-center mb-2">
                    <span className="text-azure-blue font-semibold mr-2">{milestone.year}</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-white font-medium ml-2">{milestone.certification}</span>
                  </div>
                  <p className="text-gray-300">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;