const AulaMaterial = () => (
    <div className="mb-6">
      <h2 className="text-xl font-semibold">Materiais Complementares:</h2>
      <ul className="list-disc ml-6">
        <li>
          <a
            href="/caminho/para/material.pdf"
            className="text-[#F99F1B]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apostila: Funções Quadráticas (PDF)
          </a>
        </li>
        <li>
          <a href="#" className="text-[#F99F1B]">Exercícios de Fixação</a>
        </li>
      </ul>
    </div>
  );
  
  export default AulaMaterial;
  