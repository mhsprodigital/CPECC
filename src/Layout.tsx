import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  UserPlus, 
  ShieldCheck, 
  FileText, 
  CheckSquare, 
  Briefcase, 
  Receipt, 
  GraduationCap, 
  Activity, 
  Send, 
  PieChart,
  Users
} from 'lucide-react';

const pesquisadorNav = [
  { path: '/', label: 'Painel Principal', icon: LayoutDashboard },
  { path: '/register', label: 'Meu Cadastro', icon: UserPlus },
  { path: '/project-submission', label: 'Submeter Projeto', icon: FileText },
  { path: '/project-management', label: 'Meus Projetos', icon: Briefcase },
  { path: '/accountability', label: 'Prestação de Contas', icon: Receipt },
  { path: '/funding-submit', label: 'Solicitar Fomento', icon: Send },
  { path: '/funding-status', label: 'Status de Fomento', icon: PieChart },
  { path: '/picite-dashboard', label: 'Área do Aluno (PICITE)', icon: GraduationCap },
];

const gerencialNav = [
  { path: '/admin-validation', label: 'Validação Administrativa', icon: ShieldCheck },
  { path: '/evaluation', label: 'Avaliação de Projetos', icon: CheckSquare },
  { path: '/picite-register', label: 'Vincular Aluno PICITE', icon: Users },
  { path: '/picite-activity', label: 'Validar Atividades PICITE', icon: Activity },
];

export default function Layout() {
  const [perfil, setPerfil] = useState<'pesquisador' | 'gerencial'>('pesquisador');

  const navItems = perfil === 'pesquisador' ? pesquisadorNav : gerencialNav;

  return (
    <div className="flex h-screen bg-slate-50 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col overflow-y-auto">
        <div className="p-6 border-b border-slate-200">
          <h1 className="text-xl font-bold text-blue-900">Portal CPECC</h1>
          <p className="text-sm text-slate-500">Gestão de Pesquisa</p>
        </div>
        
        {/* Profile Switcher */}
        <div className="p-4 border-b border-slate-200 bg-slate-50">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Alternar Perfil</p>
          <div className="flex bg-slate-200 p-1 rounded-lg">
            <button 
              onClick={() => setPerfil('pesquisador')}
              className={`flex-1 text-xs font-medium py-1.5 rounded-md transition-colors ${perfil === 'pesquisador' ? 'bg-white text-blue-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Pesquisador
            </button>
            <button 
              onClick={() => setPerfil('gerencial')}
              className={`flex-1 text-xs font-medium py-1.5 rounded-md transition-colors ${perfil === 'gerencial' ? 'bg-white text-blue-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Gerencial
            </button>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 px-3">
            {perfil === 'pesquisador' ? 'Menu do Pesquisador' : 'Menu Gerencial'}
          </p>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-slate-700 hover:bg-slate-100'
                }`
              }
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
