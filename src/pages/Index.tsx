import AuditHeader from "@/components/AuditHeader";
import TableOfContents from "@/components/TableOfContents";
import ContentAudit from "@/components/audit/ContentAudit";
import OnPageAudit from "@/components/audit/OnPageAudit";
import BacklinksAudit from "@/components/audit/BacklinksAudit";
import LLMsAudit from "@/components/audit/LLMsAudit";
import CompetitorsAudit from "@/components/audit/CompetitorsAudit";
const Index = () => {
  return <div className="min-h-screen bg-background">
      <AuditHeader />
      <TableOfContents />
      <ContentAudit />
      <OnPageAudit />
      <BacklinksAudit />
      <LLMsAudit />
      <CompetitorsAudit />
      
      {/* Footer */}
      <footer className="py-12 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-4">VIDA Select SEO Audit - Complete Report</h3>
          <p className="text-lg opacity-90 mb-6">A comprehensive analysis covering all aspects of SEO performance</p>
          <p className="text-sm opacity-75">
            Report prepared with data-driven insights from 12 months of analysis
          </p>
        </div>
      </footer>
    </div>;
};
export default Index;