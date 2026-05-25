import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Building, Users } from 'lucide-react';

const ProjectDetails = () => {
  const { id } = useParams();
  
  // This would typically come from a database, but for now we'll use static data
  const projects = {
    'central-park-deltamas': {
      title: 'Central Park DeltaMas',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1577493340887-b7bfff550145?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      description: 'A stunning 40-story commercial tower with sustainable features.',
      location: 'DeltaMas, Indonesia',
      completionDate: '2024',
      size: '75,000 sq m',
      client: 'DeltaMas Development',
      details: 'Central Park DeltaMas represents the pinnacle of sustainable commercial architecture. This 40-story tower seamlessly integrates green technology with modern design principles, featuring solar panels, rainwater harvesting systems, and energy-efficient climate control.',
      gallery: [
        'https://images.unsplash.com/photo-1577493340887-b7bfff550145?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1613390792897-aa0c06a52332?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1481253127861-534498168948?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      ],
    },
    'park-regis-raden-saleh': {
      title: 'Park Regis Raden Saleh',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      description: 'Luxury residential complex with integrated green spaces.',
      location: 'Jakarta, Indonesia',
      completionDate: '2023',
      size: '45,000 sq m',
      client: 'Raden Saleh Properties',
      details: 'Park Regis Raden Saleh redefines luxury living with its innovative approach to residential architecture. The complex features extensive green spaces, private gardens, and state-of-the-art amenities while maintaining a strong connection to nature.',
      gallery: [
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1613390792897-aa0c06a52332?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1481253127861-534498168948?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      ],
    },
    'burza-hotel-palembang': {
      title: 'Burza Hotel Palembang',
      category: 'Mixed Use',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      description: 'A modern mixed-use development fostering creativity and collaboration.',
      location: 'Palembang, Indonesia',
      completionDate: '2023',
      size: '60,000 sq m',
      client: 'Burza Group',
      details: 'Burza Hotel Palembang stands as a testament to modern mixed-use architecture. This development combines luxury hospitality with premium office spaces and retail outlets, creating a vibrant urban hub in the heart of Palembang.',
      gallery: [
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1613390792897-aa0c06a52332?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1481253127861-534498168948?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      ],
    },
    'pelangi-park-resort': {
      title: 'Pelangi Park Resort',
      category: 'Hospitality',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      description: 'Luxurious wellness retreat with organic architecture.',
      location: 'Bali, Indonesia',
      completionDate: '2024',
      size: '35,000 sq m',
      client: 'Pelangi Resorts',
      details: 'Pelangi Park Resort embodies the harmony between luxury and nature. This wellness retreat features organic architecture that blends seamlessly with its natural surroundings, offering guests an immersive experience in sustainable luxury.',
      gallery: [
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1613390792897-aa0c06a52332?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1481253127861-534498168948?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      ],
    },
  };

  const project = projects[id as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Link to="/projects" className="text-blue-600 hover:text-blue-700">
            Return to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{
              backgroundImage: `url(${project.image})`,
            }}
          >
            <div className="absolute inset-0 bg-black/70" />
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/projects"
            className="inline-flex items-center text-white mb-8 hover:text-blue-400 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Projects
          </Link>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white"
          >
            {project.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl"
          >
            {project.description}
          </motion.p>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-6 dark:text-white">About the Project</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">{project.details}</p>

              <h3 className="text-xl font-bold mb-4 dark:text-white">Gallery</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.gallery.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative aspect-video overflow-hidden rounded-lg"
                  >
                    <img
                      src={image}
                      alt={`${project.title} - Gallery ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg h-fit">
              <h3 className="text-xl font-bold mb-6 dark:text-white">Project Details</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                    <p className="font-medium dark:text-white">{project.location}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-blue-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Completion Date</p>
                    <p className="font-medium dark:text-white">{project.completionDate}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Building className="h-5 w-5 text-blue-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Project Size</p>
                    <p className="font-medium dark:text-white">{project.size}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-blue-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Client</p>
                    <p className="font-medium dark:text-white">{project.client}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;