import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface WarDetails {
  title: string;
  year: string;
  enemy: string;
  commanders: {
    vietnamese: string[];
    enemy: string[];
  };
  tactics: string[];
  weapons: {
    vietnamese: string[];
    enemy: string[];
  };
  outcome: string;
  significance: string;
}

interface DetailModalProps {
  warDetails: WarDetails;
  children: React.ReactNode;
}

const DetailModal = ({ warDetails, children }: DetailModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-card border-accent/20">
        <DialogHeader>
          <DialogTitle className="text-2xl text-accent flex items-center gap-2">
            <span className="w-3 h-3 bg-accent rounded-full animate-pulse-glow"></span>
            {warDetails.title} ({warDetails.year})
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 animate-fade-in">
          {/* Enemy Info */}
          <div className="bg-muted/30 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-foreground mb-2">Đối Thủ</h3>
            <Badge variant="destructive" className="text-sm">
              {warDetails.enemy}
            </Badge>
          </div>

          {/* Commanders */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-secondary/20 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                Chỉ Huy Việt Nam
              </h3>
              <ul className="space-y-2">
                {warDetails.commanders.vietnamese.map((commander, idx) => (
                  <li key={idx} className="text-muted-foreground flex items-center gap-2">
                    <span className="w-1 h-1 bg-accent rounded-full"></span>
                    {commander}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-destructive/10 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-destructive rounded-full"></span>
                Chỉ Huy Đối Phương
              </h3>
              <ul className="space-y-2">
                {warDetails.commanders.enemy.map((commander, idx) => (
                  <li key={idx} className="text-muted-foreground flex items-center gap-2">
                    <span className="w-1 h-1 bg-destructive rounded-full"></span>
                    {commander}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Separator className="bg-border" />

          {/* Tactics */}
          <div className="bg-primary/10 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              Chiến Thuật Chính
            </h3>
            <div className="grid md:grid-cols-2 gap-2">
              {warDetails.tactics.map((tactic, idx) => (
                <div key={idx} className="bg-background/50 p-2 rounded text-sm text-muted-foreground hover:bg-accent/10 transition-colors">
                  • {tactic}
                </div>
              ))}
            </div>
          </div>

          {/* Weapons */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-secondary/20 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-3">Vũ Khí Việt Nam</h3>
              <ul className="space-y-1">
                {warDetails.weapons.vietnamese.map((weapon, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground">• {weapon}</li>
                ))}
              </ul>
            </div>
            
            <div className="bg-destructive/10 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-3">Vũ Khí Đối Phương</h3>
              <ul className="space-y-1">
                {warDetails.weapons.enemy.map((weapon, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground">• {weapon}</li>
                ))}
              </ul>
            </div>
          </div>

          <Separator className="bg-border" />

          {/* Outcome & Significance */}
          <div className="space-y-4">
            <div className="bg-accent/10 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-2">Kết Quả</h3>
              <p className="text-muted-foreground">{warDetails.outcome}</p>
            </div>
            
            <div className="bg-gradient-military/20 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-2">Ý Nghĩa Lịch Sử</h3>
              <p className="text-muted-foreground">{warDetails.significance}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DetailModal;