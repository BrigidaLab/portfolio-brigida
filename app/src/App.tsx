import { MainLayout } from './layouts/MainLayout';
import { Hero } from './components/Hero';
import { ProjectGallery } from './components/ProjectGallery';

function App() {
  return (
    <MainLayout>
      <Hero />
      <ProjectGallery />
      <div className="h-[50vh] bg-gray-50 flex items-center justify-center">
        <p className="text-gray-400">Próxima Seção (Contato/Sobre)...</p>
      </div>
    </MainLayout>
  );
}

export default App;
