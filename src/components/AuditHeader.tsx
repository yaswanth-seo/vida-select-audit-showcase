import { FileText, Calendar, TrendingUp } from "lucide-react";

const AuditHeader = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-primary text-primary-foreground">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bS00IDB2Mmgydi0yaC0yem0tNCAwdjJoMnYtMmgtMnptLTQgMHYyaDJ2LTJoLTJ6bS00IDB2Mmgydi0yaC0yem0tNCAwdjJoMnYtMmgtMnptLTQgMHYyaDJ2LTJoLTJ6bS00IDB2Mmgydi0yaC0yem0wIDR2Mmgydi0yaC0yem0wIDR2Mmgydi0yaC0yem0wIDR2Mmgydi0yaC0yem0wIDR2Mmgydi0yaC0yem0wIDR2Mmgydi0yaC0yem0wIDR2Mmgydi0yaC0yem0wIDR2Mmgydi0yaC0yeiIvPjwvZz48L2c+PC9zdmc+')] opacity-10"></div>
      
      <div className="container mx-auto px-6 py-16 relative">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
            <FileText className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-5xl font-bold tracking-tight">VIDA Select</h1>
            <p className="text-xl text-primary-foreground/80 mt-1">Comprehensive SEO Audit Report</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-2">
              <Calendar className="w-5 h-5 text-primary-foreground/80" />
              <span className="text-sm text-primary-foreground/80 font-medium">Analysis Period</span>
            </div>
            <p className="text-2xl font-bold">12 Months</p>
            <p className="text-sm text-primary-foreground/70 mt-1">Data-driven insights</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-5 h-5 text-primary-foreground/80" />
              <span className="text-sm text-primary-foreground/80 font-medium">Pages Analyzed</span>
            </div>
            <p className="text-2xl font-bold">2,006</p>
            <p className="text-sm text-primary-foreground/70 mt-1">Comprehensive coverage</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-2">
              <FileText className="w-5 h-5 text-primary-foreground/80" />
              <span className="text-sm text-primary-foreground/80 font-medium">Audit Sections</span>
            </div>
            <p className="text-2xl font-bold">5 Categories</p>
            <p className="text-sm text-primary-foreground/70 mt-1">End-to-end analysis</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditHeader;
