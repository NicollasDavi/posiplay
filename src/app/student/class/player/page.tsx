"use client";

import AulaAvaliacao from "@/components/Class/AulaAvaliacao";
import AulaDescricao from "@/components/Class/AulaDescricao";
import AulaHeader from "@/components/Class/AulaHeader";
import AulaMaterial from "@/components/Class/AulaMaterial";
import AulaVideo from "@/components/Class/AulaVideo";


const AulaPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <AulaHeader />
      <AulaDescricao />
      <AulaVideo />
      <AulaMaterial />
      <AulaAvaliacao />
    </div>
  );
};

export default AulaPage;
