export const contest = {
    "_id": "6654429dac04cb918ac43b3e",
    "name":  "WBT Placement Drive ABC",
    "description": "<p>A Placement Drive For College ABC final year students was conducted by WBT. This event aimed to provide opportunities for students to secure job placements before graduating. Representatives from various companies participated to interview and recruit eligible candidates.</p>",
    "duration": 5,
    "rules": "<ul style=\"list-style-type: circle;\"><li>Ensure that all electronic devices except the one being used for the assessment are turned off or placed out of reach.</li><li>Do not communicate with any other individual during the assessment period.</li><li>Strictly adhere to the time limit specified for each section or question.</li><li>Properly cite any external sources used, following the institution's guidelines for academic integrity</li></ul>",
    "startDate": "2024-05-29T12:00:00.000Z",
    "endDate": "2024-05-31T12:00:00.000Z",
    "active": true,
    "questions" : [
        {
            "_id":"665447a93ec3bcbbee4fbc5c",
            "question": "What is the capital of India?",
            "type":"mcq",
            "mcqOptions": ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
            "multipleQuestion":[],
            "marks":1
        },
        {
            "_id":"665447a93ec3bcbbee4fbc5d",
            "question": "What is the capital of Nepal?",
            // "questionImage":"src/assets/picture.jpg",
            "type":"mcq",
            "mcqOptions": ["Kathmandu", "Pokhara", "Bhaktapur", "Lalitpur"],
            "multipleQuestion":[],
            "marks":1
        },
        {
            "_id":"665447a93ec3bcbbee4fbc5e",
            "question": "Who was the first president of India?",
            "type":"short",
            "mcqOptions": [],
            "multipleQuestion":[],
            "marks":2
        },
        {
            "_id":"665447a93ec372bbee4fbc5f",
            "question": "What are newtons Laws of Motion?",
            // "questionImage":"src/assets/picture.jpg",
            "type":"long",
            "mcqOptions": [],
            "multipleQuestion":[],
            "marks":5
        },
        {
            "_id":"665447a93ecdda3bcbbee4fbc60",
            "question": "Write Answer for following Questions?",
            "type":"multiple",
            "mcqOptions": [],
            "multipleQuestion":[
                "sin30", "cos30", "tan30"
            ],
            "marks":3
        }
    ]
}

export const result = {
    _id: "665449f4689d1bd44d480ca4",
    contestId: "6654429dac04cb918ac43b3e",
    userId: {
        "_id":"665449f4689d1bd44d480ca4",
        name:"Anurag Bhatt",
        userId:"WBT-1HK20CS028"
    }
}