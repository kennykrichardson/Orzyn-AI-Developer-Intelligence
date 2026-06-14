def calculate_risk(
    bus_factor: float,
):
    if bus_factor <= 1:
        return 90

    if bus_factor <= 3:
        return 60

    return 20