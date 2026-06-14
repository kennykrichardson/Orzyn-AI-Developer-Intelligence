def calculate_health_score(
    productivity_score: float,
    velocity_score: float,
    bus_factor: float,
    risk_score: float,
):
    productivity_component = min(
        productivity_score / 1000,
        30,
    )

    velocity_component = min(
        velocity_score,
        30,
    )

    bus_factor_component = min(
        bus_factor * 3,
        20,
    )

    risk_component = max(
        20 - risk_score,
        0,
    )

    return round(
        productivity_component
        + velocity_component
        + bus_factor_component
        + risk_component,
        2,
    )