export const contest = {
    "_id": "6654429dac04cb918ac43b3e",
    "name":  "WBT Placement Drive ABC",
    "description": "A Placement Drive For College ABC final year student conducted by WBT",
    "duration": 5,
    "rules": "1. New Rule 1\n2. New Rule 2\n3.New Rule 3\n4. New Rule 4",
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
            "questionImage":"src/assets/picture.jpg",
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
            "_id":"665447a93ec3bcbbee4fbc5f",
            "question": "What are newtons Laws of Motion?",
            "questionImage":"src/assets/picture.jpg",
            "type":"long",
            "mcqOptions": [],
            "multipleQuestion":[],
            "marks":5
        },
        {
            "_id":"665447a93ec3bcbbee4fbc60",
            "question": "Write Answer for following Questions?",
            "questionImage":"src/assets/picture.jpg",
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