const Cards = () => {

    const cards = [
        {
            text: 'Earnings (Monthly)',
            nums: '$40,000',
            class: 'fa fa-calendar',
            color: 'primary'
        },
        {
            text: 'EARNINGS (ANNUAL)',
            nums: '$215,000',
            class: 'fa fa-dollar',
            color: 'success'
        },
        {
            text: 'TASKS',
            nums: '50%',
            class: 'fa fa-clipboard',
            color: 'info'
        },
        {
            text: 'PENDING REQUESTS',
            nums: '18',
            class: 'fa fa-comments',
            color: 'warning'
        }
    ]

    return (
        <div className="row">
            {cards.map((card, index) => (
                <div key={index} className="col-xl-3 col-md-6 mb-4">
                    <div className={`card border-left-${card.color} shadow h-100 py-2`}>
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className={`text-xs font-weight-bold text-${card.color} text-uppercase mb-1`}>
                                        {card.text}</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">{card.nums}</div>
                                </div>
                                <div className="col-auto">
                                    <i className={`${card.class} fa-2x text-gray-300`}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Cards;