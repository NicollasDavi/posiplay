const Reminders = () => {
    const reminders = [
      "Lembre-se de submeter sua redação até sexta-feira.",
      "O próximo simulado será realizado no sábado.",
      "Confira novos materiais complementares na plataforma.",
    ];
  
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold mb-4 text-center">Lembretes</h3>
        <ul className="space-y-2">
          {reminders.map((reminder, index) => (
            <li key={index} className="text-lg">{reminder}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Reminders;
  