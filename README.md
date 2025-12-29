# Dino API

A small, science-driven API focused on dinosaurs.  
This project was built by me as a hobby project because i'm genuinely interested in paleontology. I am not a professional paleontologist, just an enthusiast, so there may be details that can always be refined. I'm open to advice, corrections, and suggestions for improvement. <3

---

## Overview

All data is served as JSON from the following endpoint:

```
/api/dinosaurs
```

Each item in the response includes:

- **genus** — the genus name and basic details
- **classification** — taxonomic grouping 
- **discovery** — discovery and naming details
- **morphology (size)** — general size or morphological information

---

## Query Parameters

The API currently supports two query parameters.

### 1. search (search by genus)

Filters results by genus name (partial matches allowed):

```
/api/dinosaurs?search=triceratops
```

### 2. limit (limit the number of results)

Restricts how many records are returned:

```
/api/dinosaurs?limit=5
```

You can combine both:

```
/api/dinosaurs?search=raptor&limit=3
```

---

## Project Goals

- Provide simple programmatic access to dinosaur data
- Keep information as accurate and science-oriented as possible 
- Continue improving the dataset over time with feedback 
- Make the API straightforward for developers to use 

---

## Contributing & Feedback

Because this is an enthusiast project, there is always room to improve.

If you notice inaccuracies, have suggestions, or want to contribute, feel free to open an issue or share feedback. Advice is always welcome.

---

## Future Improvements

Some potential next steps:

- expand morphology details
- add better documentation and examples
- introduce more filters (time period, diet, discovery location)
- include citation references where available

---

Thanks for taking a look at the Dino API.  
