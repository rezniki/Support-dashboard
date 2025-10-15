import React from "react";

const SuggestionsPanel = () => {
    const mainSuggestions = [
        "Проверьте, есть ли этот вопрос в базе знаний",
        "Уточните детали у пользователя перед закрытием тикета",
        "Предложите дополнительные решения, если запрос не решён полностью",
    ];

    const additional = [
        "Не забудьте обновить статус тикета",
        "Используйте шаблон из категории 'Возвраты'",
        "Проверьте наличие вложений в письме клиента",
    ];

    return (
        <div className="suggestions-panel">
            <h3>Рекомендации для оператора 🤖</h3>
            <div className="suggestions-section main">
                <h4>Основные</h4>
                {mainSuggestions.map((s, i) => (
                <div key={i} className="suggestion highlight">{s}</div>
                ))}
            </div>
            <div className="suggestions-section additional">
                <h4>Дополнительные</h4>
                {additional.map((s, i) => (
                <div key={i} className="suggestion">{s}</div>
                ))}
            </div>
        </div>
    );
};

export default SuggestionsPanel;
