def analyze_languages(
    repository_data: dict,
):
    language = repository_data.get(
        "language",
        "Unknown",
    )

    return {
        "primary_language": language,
        "confidence": 100,
    }