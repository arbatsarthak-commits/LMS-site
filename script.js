/* ============================================
   LMS Dashboard - JavaScript Functionality
   Quiz interactions, navigation, and UI updates
   ============================================ */

// ============================================
// Quiz Data Structure (Sample Data)
// ============================================
const quizData = {
    python: [
        {
            id: 1,
            title: "Python Fundamentals Quiz",
            course: "Introduction to Python",
            questions: 15,
            timeLimit: 45,
            status: "pending",
            type: "academic",
            questionsList: [
                {
                    id: 1,
                    question: "Which of the following is the correct way to create a list in Python?",
                    options: [
                        { letter: "A", text: "list = [1, 2, 3]", correct: true },
                        { letter: "B", text: "list = (1, 2, 3)", correct: false },
                        { letter: "C", text: "list = {1, 2, 3}", correct: false },
                        { letter: "D", text: "list = <1, 2, 3>", correct: false }
                    ]
                },
                {
                    id: 2,
                    question: "What is the output of print(2 ** 3)?",
                    options: [
                        { letter: "A", text: "6", correct: false },
                        { letter: "B", text: "8", correct: true },
                        { letter: "C", text: "9", correct: false },
                        { letter: "D", text: "5", correct: false }
                    ]
                },
                {
                    id: 3,
                    question: "How do you define a function in Python?",
                    options: [
                        { letter: "A", text: "function function_name():", correct: false },
                        { letter: "B", text: "def function_name():", correct: true },
                        { letter: "C", text: "define function_name():", correct: false },
                        { letter: "D", text: "func function_name():", correct: false }
                    ]
                },
                {
                    id: 4,
                    question: "Which data type is mutable in Python?",
                    options: [
                        { letter: "A", text: "List", correct: true },
                        { letter: "B", text: "Tuple", correct: false },
                        { letter: "C", text: "String", correct: false },
                        { letter: "D", text: "Integer", correct: false }
                    ]
                },
                {
                    id: 5,
                    question: "What is Python?",
                    options: [
                        { letter: "A", text: "A high-level programming language", correct: true },
                        { letter: "B", text: "A database system", correct: false },
                        { letter: "C", text: "An operating system", correct: false },
                        { letter: "D", text: "A web browser", correct: false }
                    ]
                },
                {
                    id: 6,
                    question: "What is the output of 'hello'.upper()?",
                    options: [
                        { letter: "A", text: "HELLO", correct: true },
                        { letter: "B", text: "hello", correct: false },
                        { letter: "C", text: "Hello", correct: false },
                        { letter: "D", text: "Error", correct: false }
                    ]
                },
                {
                    id: 7,
                    question: "Which operator is used for floor division in Python?",
                    options: [
                        { letter: "A", text: "/", correct: false },
                        { letter: "B", text: "//", correct: true },
                        { letter: "C", text: "%", correct: false },
                        { letter: "D", text: "**", correct: false }
                    ]
                },
                {
                    id: 8,
                    question: "What does len([1, 2, 3, 4]) return?",
                    options: [
                        { letter: "A", text: "3", correct: false },
                        { letter: "B", text: "4", correct: true },
                        { letter: "C", text: "5", correct: false },
                        { letter: "D", text: "Error", correct: false }
                    ]
                },
                {
                    id: 9,
                    question: "Which method is used to add an element to the end of a list?",
                    options: [
                        { letter: "A", text: "append()", correct: true },
                        { letter: "B", text: "add()", correct: false },
                        { letter: "C", text: "insert()", correct: false },
                        { letter: "D", text: "extend()", correct: false }
                    ]
                },
                {
                    id: 10,
                    question: "What is the result of 10 // 3?",
                    options: [
                        { letter: "A", text: "3.33", correct: false },
                        { letter: "B", text: "3", correct: true },
                        { letter: "C", text: "4", correct: false },
                        { letter: "D", text: "3.0", correct: false }
                    ]
                },
                {
                    id: 11,
                    question: "Which keyword is used for conditional statements in Python?",
                    options: [
                        { letter: "A", text: "if", correct: true },
                        { letter: "B", text: "when", correct: false },
                        { letter: "C", text: "case", correct: false },
                        { letter: "D", text: "switch", correct: false }
                    ]
                },
                {
                    id: 12,
                    question: "What does range(5) generate?",
                    options: [
                        { letter: "A", text: "[0, 1, 2, 3, 4]", correct: true },
                        { letter: "B", text: "[1, 2, 3, 4, 5]", correct: false },
                        { letter: "C", text: "[0, 1, 2, 3, 4, 5]", correct: false },
                        { letter: "D", text: "[1, 2, 3, 4]", correct: false }
                    ]
                },
                {
                    id: 13,
                    question: "Which data structure uses key-value pairs?",
                    options: [
                        { letter: "A", text: "List", correct: false },
                        { letter: "B", text: "Tuple", correct: false },
                        { letter: "C", text: "Dictionary", correct: true },
                        { letter: "D", text: "Set", correct: false }
                    ]
                },
                {
                    id: 14,
                    question: "What is the output of 'Python'[1:4]?",
                    options: [
                        { letter: "A", text: "yth", correct: true },
                        { letter: "B", text: "Pyt", correct: false },
                        { letter: "C", text: "thon", correct: false },
                        { letter: "D", text: "Python", correct: false }
                    ]
                },
                {
                    id: 15,
                    question: "Which of the following is used to read user input?",
                    options: [
                        { letter: "A", text: "input()", correct: true },
                        { letter: "B", text: "read()", correct: false },
                        { letter: "C", text: "get_input()", correct: false },
                        { letter: "D", text: "scan()", correct: false }
                    ]
                }
            ]
        }
    ],
    webdev: [
        {
            id: 3,
            title: "Web Development Fundamentals Quiz",
            course: "Web Development",
            questions: 15,
            timeLimit: 45,
            status: "pending",
            type: "academic",
            questionsList: [
                {
                    id: 1,
                    question: "What does HTML stand for?",
                    options: [
                        { letter: "A", text: "HyperText Markup Language", correct: true },
                        { letter: "B", text: "High-Level Text Markup Language", correct: false },
                        { letter: "C", text: "Hyperlink and Text Markup Language", correct: false },
                        { letter: "D", text: "Home Tool Markup Language", correct: false }
                    ]
                },
                {
                    id: 2,
                    question: "Which HTML tag is used for the largest heading?",
                    options: [
                        { letter: "A", text: "<h1>", correct: true },
                        { letter: "B", text: "<h6>", correct: false },
                        { letter: "C", text: "<head>", correct: false },
                        { letter: "D", text: "<heading>", correct: false }
                    ]
                },
                {
                    id: 3,
                    question: "Which CSS property is used to change text color?",
                    options: [
                        { letter: "A", text: "text-color", correct: false },
                        { letter: "B", text: "color", correct: true },
                        { letter: "C", text: "font-color", correct: false },
                        { letter: "D", text: "text-style", correct: false }
                    ]
                },
                {
                    id: 4,
                    question: "What is the correct way to include an external JavaScript file?",
                    options: [
                        { letter: "A", text: '<script src="file.js">', correct: true },
                        { letter: "B", text: '<javascript src="file.js">', correct: false },
                        { letter: "C", text: '<link src="file.js">', correct: false },
                        { letter: "D", text: '<js src="file.js">', correct: false }
                    ]
                },
                {
                    id: 5,
                    question: "Which CSS property is used to make text bold?",
                    options: [
                        { letter: "A", text: "font-weight", correct: true },
                        { letter: "B", text: "bold", correct: false },
                        { letter: "C", text: "text-bold", correct: false },
                        { letter: "D", text: "weight", correct: false }
                    ]
                },
                {
                    id: 6,
                    question: "What does CSS stand for?",
                    options: [
                        { letter: "A", text: "Computer Style Sheets", correct: false },
                        { letter: "B", text: "Cascading Style Sheets", correct: true },
                        { letter: "C", text: "Creative Style Sheets", correct: false },
                        { letter: "D", text: "Colorful Style Sheets", correct: false }
                    ]
                },
                {
                    id: 7,
                    question: "Which HTML attribute is used to define inline styles?",
                    options: [
                        { letter: "A", text: "styles", correct: false },
                        { letter: "B", text: "style", correct: true },
                        { letter: "C", text: "css", correct: false },
                        { letter: "D", text: "inline", correct: false }
                    ]
                },
                {
                    id: 8,
                    question: "What is the correct way to create a function in JavaScript?",
                    options: [
                        { letter: "A", text: "function myFunction()", correct: true },
                        { letter: "B", text: "function = myFunction()", correct: false },
                        { letter: "C", text: "function:myFunction()", correct: false },
                        { letter: "D", text: "create function myFunction()", correct: false }
                    ]
                },
                {
                    id: 9,
                    question: "Which HTML tag is used to create a hyperlink?",
                    options: [
                        { letter: "A", text: "<link>", correct: false },
                        { letter: "B", text: "<a>", correct: true },
                        { letter: "C", text: "<href>", correct: false },
                        { letter: "D", text: "<url>", correct: false }
                    ]
                },
                {
                    id: 10,
                    question: "What does DOM stand for?",
                    options: [
                        { letter: "A", text: "Document Object Model", correct: true },
                        { letter: "B", text: "Data Object Model", correct: false },
                        { letter: "C", text: "Document Orientation Model", correct: false },
                        { letter: "D", text: "Dynamic Object Management", correct: false }
                    ]
                },
                {
                    id: 11,
                    question: "Which CSS property is used to add space between elements?",
                    options: [
                        { letter: "A", text: "spacing", correct: false },
                        { letter: "B", text: "margin", correct: true },
                        { letter: "C", text: "padding", correct: false },
                        { letter: "D", text: "gap", correct: false }
                    ]
                },
                {
                    id: 12,
                    question: "What is the correct HTML tag for inserting a line break?",
                    options: [
                        { letter: "A", text: "<br>", correct: true },
                        { letter: "B", text: "<break>", correct: false },
                        { letter: "C", text: "<lb>", correct: false },
                        { letter: "D", text: "<line>", correct: false }
                    ]
                },
                {
                    id: 13,
                    question: "Which JavaScript method is used to select an element by ID?",
                    options: [
                        { letter: "A", text: "getElementById()", correct: true },
                        { letter: "B", text: "getElement()", correct: false },
                        { letter: "C", text: "selectId()", correct: false },
                        { letter: "D", text: "findById()", correct: false }
                    ]
                },
                {
                    id: 14,
                    question: "What does the CSS property 'display: flex' do?",
                    options: [
                        { letter: "A", text: "Makes elements flexible", correct: true },
                        { letter: "B", text: "Hides elements", correct: false },
                        { letter: "C", text: "Makes text bold", correct: false },
                        { letter: "D", text: "Changes text color", correct: false }
                    ]
                },
                {
                    id: 15,
                    question: "Which HTML tag is used to define an unordered list?",
                    options: [
                        { letter: "A", text: "<ul>", correct: true },
                        { letter: "B", text: "<ol>", correct: false },
                        { letter: "C", text: "<list>", correct: false },
                        { letter: "D", text: "<li>", correct: false }
                    ]
                }
            ]
        }
    ],
    database: [
        {
            id: 5,
            title: "Database Design Fundamentals Quiz",
            course: "Database Design",
            questions: 15,
            timeLimit: 45,
            status: "pending",
            type: "academic",
            questionsList: [
                {
                    id: 1,
                    question: "What does SQL stand for?",
                    options: [
                        { letter: "A", text: "Structured Query Language", correct: true },
                        { letter: "B", text: "Simple Query Language", correct: false },
                        { letter: "C", text: "System Query Language", correct: false },
                        { letter: "D", text: "Standard Query Language", correct: false }
                    ]
                },
                {
                    id: 2,
                    question: "Which SQL command is used to retrieve data from a database?",
                    options: [
                        { letter: "A", text: "GET", correct: false },
                        { letter: "B", text: "SELECT", correct: true },
                        { letter: "C", text: "RETRIEVE", correct: false },
                        { letter: "D", text: "FETCH", correct: false }
                    ]
                },
                {
                    id: 3,
                    question: "What is a primary key?",
                    options: [
                        { letter: "A", text: "A unique identifier for each row", correct: true },
                        { letter: "B", text: "The first column in a table", correct: false },
                        { letter: "C", text: "A foreign key", correct: false },
                        { letter: "D", text: "An index", correct: false }
                    ]
                },
                {
                    id: 4,
                    question: "Which normalization form eliminates repeating groups?",
                    options: [
                        { letter: "A", text: "1NF", correct: true },
                        { letter: "B", text: "2NF", correct: false },
                        { letter: "C", text: "3NF", correct: false },
                        { letter: "D", text: "BCNF", correct: false }
                    ]
                },
                {
                    id: 5,
                    question: "What does ACID stand for in database transactions?",
                    options: [
                        { letter: "A", text: "Atomicity, Consistency, Isolation, Durability", correct: true },
                        { letter: "B", text: "Access, Control, Integrity, Data", correct: false },
                        { letter: "C", text: "Application, Connection, Index, Database", correct: false },
                        { letter: "D", text: "Analysis, Compression, Integration, Design", correct: false }
                    ]
                },
                {
                    id: 6,
                    question: "Which SQL clause is used to filter records?",
                    options: [
                        { letter: "A", text: "FILTER", correct: false },
                        { letter: "B", text: "WHERE", correct: true },
                        { letter: "C", text: "CONDITION", correct: false },
                        { letter: "D", text: "IF", correct: false }
                    ]
                },
                {
                    id: 7,
                    question: "What is a foreign key?",
                    options: [
                        { letter: "A", text: "A key that references a primary key in another table", correct: true },
                        { letter: "B", text: "A duplicate primary key", correct: false },
                        { letter: "C", text: "An optional key", correct: false },
                        { letter: "D", text: "A composite key", correct: false }
                    ]
                },
                {
                    id: 8,
                    question: "Which SQL command is used to insert new data?",
                    options: [
                        { letter: "A", text: "ADD", correct: false },
                        { letter: "B", text: "INSERT", correct: true },
                        { letter: "C", text: "CREATE", correct: false },
                        { letter: "D", text: "UPDATE", correct: false }
                    ]
                },
                {
                    id: 9,
                    question: "What is the purpose of an index in a database?",
                    options: [
                        { letter: "A", text: "To speed up data retrieval", correct: true },
                        { letter: "B", text: "To store duplicate data", correct: false },
                        { letter: "C", text: "To create backups", correct: false },
                        { letter: "D", text: "To format data", correct: false }
                    ]
                },
                {
                    id: 10,
                    question: "Which SQL function is used to count rows?",
                    options: [
                        { letter: "A", text: "SUM()", correct: false },
                        { letter: "B", text: "COUNT()", correct: true },
                        { letter: "C", text: "TOTAL()", correct: false },
                        { letter: "D", text: "NUMBER()", correct: false }
                    ]
                },
                {
                    id: 11,
                    question: "What does JOIN do in SQL?",
                    options: [
                        { letter: "A", text: "Combines rows from multiple tables", correct: true },
                        { letter: "B", text: "Creates a new table", correct: false },
                        { letter: "C", text: "Deletes duplicate rows", correct: false },
                        { letter: "D", text: "Sorts data", correct: false }
                    ]
                },
                {
                    id: 12,
                    question: "Which data type is used to store large text?",
                    options: [
                        { letter: "A", text: "VARCHAR", correct: false },
                        { letter: "B", text: "TEXT", correct: true },
                        { letter: "C", text: "STRING", correct: false },
                        { letter: "D", text: "CHAR", correct: false }
                    ]
                },
                {
                    id: 13,
                    question: "What is a database schema?",
                    options: [
                        { letter: "A", text: "The structure of a database", correct: true },
                        { letter: "B", text: "A backup file", correct: false },
                        { letter: "C", text: "A query result", correct: false },
                        { letter: "D", text: "A table name", correct: false }
                    ]
                },
                {
                    id: 14,
                    question: "Which SQL command is used to delete data?",
                    options: [
                        { letter: "A", text: "REMOVE", correct: false },
                        { letter: "B", text: "DELETE", correct: true },
                        { letter: "C", text: "DROP", correct: false },
                        { letter: "D", text: "CLEAR", correct: false }
                    ]
                },
                {
                    id: 15,
                    question: "What is the purpose of a transaction in a database?",
                    options: [
                        { letter: "A", text: "To ensure data consistency", correct: true },
                        { letter: "B", text: "To create tables", correct: false },
                        { letter: "C", text: "To backup data", correct: false },
                        { letter: "D", text: "To optimize queries", correct: false }
                    ]
                }
            ]
        }
    ],
    ml: [
        {
            id: 7,
            title: "Machine Learning Fundamentals Quiz",
            course: "Machine Learning",
            questions: 15,
            timeLimit: 45,
            status: "pending",
            type: "academic",
            questionsList: [
                {
                    id: 1,
                    question: "What is Machine Learning?",
                    options: [
                        { letter: "A", text: "A subset of artificial intelligence", correct: true },
                        { letter: "B", text: "A programming language", correct: false },
                        { letter: "C", text: "A database system", correct: false },
                        { letter: "D", text: "A web framework", correct: false }
                    ]
                },
                {
                    id: 2,
                    question: "What are the three main types of machine learning?",
                    options: [
                        { letter: "A", text: "Supervised, Unsupervised, Reinforcement", correct: true },
                        { letter: "B", text: "Linear, Non-linear, Neural", correct: false },
                        { letter: "C", text: "Classification, Regression, Clustering", correct: false },
                        { letter: "D", text: "Deep, Shallow, Medium", correct: false }
                    ]
                },
                {
                    id: 3,
                    question: "What is overfitting in machine learning?",
                    options: [
                        { letter: "A", text: "When model performs well on training but poorly on test data", correct: true },
                        { letter: "B", text: "When model is too simple", correct: false },
                        { letter: "C", text: "When training takes too long", correct: false },
                        { letter: "D", text: "When data is imbalanced", correct: false }
                    ]
                },
                {
                    id: 4,
                    question: "Which algorithm is used for classification problems?",
                    options: [
                        { letter: "A", text: "Logistic Regression", correct: true },
                        { letter: "B", text: "Linear Regression", correct: false },
                        { letter: "C", text: "K-Means", correct: false },
                        { letter: "D", text: "Apriori", correct: false }
                    ]
                },
                {
                    id: 5,
                    question: "What is feature engineering?",
                    options: [
                        { letter: "A", text: "Creating or modifying features to improve model performance", correct: true },
                        { letter: "B", text: "Removing all features", correct: false },
                        { letter: "C", text: "Selecting random features", correct: false },
                        { letter: "D", text: "Training the model", correct: false }
                    ]
                },
                {
                    id: 6,
                    question: "What is a neural network?",
                    options: [
                        { letter: "A", text: "A network of interconnected nodes simulating neurons", correct: true },
                        { letter: "B", text: "A computer network", correct: false },
                        { letter: "C", text: "A database structure", correct: false },
                        { letter: "D", text: "A web architecture", correct: false }
                    ]
                },
                {
                    id: 7,
                    question: "What is the purpose of a training set?",
                    options: [
                        { letter: "A", text: "To train the machine learning model", correct: true },
                        { letter: "B", text: "To test the model", correct: false },
                        { letter: "C", text: "To validate results", correct: false },
                        { letter: "D", text: "To store data", correct: false }
                    ]
                },
                {
                    id: 8,
                    question: "What is cross-validation?",
                    options: [
                        { letter: "A", text: "A technique to assess model performance", correct: true },
                        { letter: "B", text: "Checking data types", correct: false },
                        { letter: "C", text: "Removing outliers", correct: false },
                        { letter: "D", text: "Normalizing data", correct: false }
                    ]
                },
                {
                    id: 9,
                    question: "Which metric is used for classification accuracy?",
                    options: [
                        { letter: "A", text: "Accuracy, Precision, Recall", correct: true },
                        { letter: "B", text: "RMSE, MAE", correct: false },
                        { letter: "C", text: "Sum of squares", correct: false },
                        { letter: "D", text: "Correlation coefficient", correct: false }
                    ]
                },
                {
                    id: 10,
                    question: "What is the bias-variance tradeoff?",
                    options: [
                        { letter: "A", text: "Balance between model complexity and generalization", correct: true },
                        { letter: "B", text: "Choosing between algorithms", correct: false },
                        { letter: "C", text: "Data preprocessing step", correct: false },
                        { letter: "D", text: "Feature selection method", correct: false }
                    ]
                },
                {
                    id: 11,
                    question: "What is gradient descent?",
                    options: [
                        { letter: "A", text: "An optimization algorithm to minimize loss", correct: true },
                        { letter: "B", text: "A data cleaning technique", correct: false },
                        { letter: "C", text: "A visualization method", correct: false },
                        { letter: "D", text: "A feature scaling technique", correct: false }
                    ]
                },
                {
                    id: 12,
                    question: "What is deep learning?",
                    options: [
                        { letter: "A", text: "ML using neural networks with multiple layers", correct: true },
                        { letter: "B", text: "Complex algorithms", correct: false },
                        { letter: "C", text: "Large datasets", correct: false },
                        { letter: "D", text: "Fast processing", correct: false }
                    ]
                },
                {
                    id: 13,
                    question: "What is a decision tree?",
                    options: [
                        { letter: "A", text: "A tree-like model for decisions", correct: true },
                        { letter: "B", text: "A database structure", correct: false },
                        { letter: "C", text: "A file system", correct: false },
                        { letter: "D", text: "A sorting algorithm", correct: false }
                    ]
                },
                {
                    id: 14,
                    question: "What is regularization?",
                    options: [
                        { letter: "A", text: "Technique to prevent overfitting", correct: true },
                        { letter: "B", text: "Data normalization", correct: false },
                        { letter: "C", text: "Feature extraction", correct: false },
                        { letter: "D", text: "Model selection", correct: false }
                    ]
                },
                {
                    id: 15,
                    question: "What does CNN stand for in deep learning?",
                    options: [
                        { letter: "A", text: "Convolutional Neural Network", correct: true },
                        { letter: "B", text: "Complex Neural Network", correct: false },
                        { letter: "C", text: "Cascading Neural Network", correct: false },
                        { letter: "D", text: "Central Neural Network", correct: false }
                    ]
                }
            ]
        }
    ],
    electronics: [
        {
            id: 8,
            title: "Electronics & Engineering Fundamentals Quiz",
            course: "Electronics & Engineering",
            questions: 15,
            timeLimit: 45,
            status: "pending",
            type: "academic",
            questionsList: [
                {
                    id: 1,
                    question: "What is Ohm's Law?",
                    options: [
                        { letter: "A", text: "V = IR", correct: true },
                        { letter: "B", text: "P = IV", correct: false },
                        { letter: "C", text: "R = V/I", correct: false },
                        { letter: "D", text: "I = V/R", correct: false }
                    ]
                },
                {
                    id: 2,
                    question: "What is the unit of resistance?",
                    options: [
                        { letter: "A", text: "Ohm (Ω)", correct: true },
                        { letter: "B", text: "Volt (V)", correct: false },
                        { letter: "C", text: "Ampere (A)", correct: false },
                        { letter: "D", text: "Watt (W)", correct: false }
                    ]
                },
                {
                    id: 3,
                    question: "What does a diode do?",
                    options: [
                        { letter: "A", text: "Allows current flow in one direction", correct: true },
                        { letter: "B", text: "Amplifies signals", correct: false },
                        { letter: "C", text: "Stores charge", correct: false },
                        { letter: "D", text: "Regulates voltage", correct: false }
                    ]
                },
                {
                    id: 4,
                    question: "What is the function of a capacitor?",
                    options: [
                        { letter: "A", text: "Store electrical energy", correct: true },
                        { letter: "B", text: "Amplify signals", correct: false },
                        { letter: "C", text: "Convert AC to DC", correct: false },
                        { letter: "D", text: "Regulate current", correct: false }
                    ]
                },
                {
                    id: 5,
                    question: "What is AC current?",
                    options: [
                        { letter: "A", text: "Alternating Current", correct: true },
                        { letter: "B", text: "Advanced Current", correct: false },
                        { letter: "C", text: "Accelerated Current", correct: false },
                        { letter: "D", text: "Amplified Current", correct: false }
                    ]
                },
                {
                    id: 6,
                    question: "What does a transistor do?",
                    options: [
                        { letter: "A", text: "Amplifies or switches electronic signals", correct: true },
                        { letter: "B", text: "Stores data", correct: false },
                        { letter: "C", text: "Converts light to electricity", correct: false },
                        { letter: "D", text: "Measures current", correct: false }
                    ]
                },
                {
                    id: 7,
                    question: "What is the unit of capacitance?",
                    options: [
                        { letter: "A", text: "Farad (F)", correct: true },
                        { letter: "B", text: "Henry (H)", correct: false },
                        { letter: "C", text: "Ohm (Ω)", correct: false },
                        { letter: "D", text: "Joule (J)", correct: false }
                    ]
                },
                {
                    id: 8,
                    question: "What is a resistor?",
                    options: [
                        { letter: "A", text: "Component that opposes current flow", correct: true },
                        { letter: "B", text: "Component that stores energy", correct: false },
                        { letter: "C", text: "Component that amplifies signals", correct: false },
                        { letter: "D", text: "Component that generates power", correct: false }
                    ]
                },
                {
                    id: 9,
                    question: "What is Kirchhoff's Current Law (KCL)?",
                    options: [
                        { letter: "A", text: "Sum of currents entering a node equals sum leaving", correct: true },
                        { letter: "B", text: "Voltage equals current times resistance", correct: false },
                        { letter: "C", text: "Power equals voltage times current", correct: false },
                        { letter: "D", text: "Resistance increases with temperature", correct: false }
                    ]
                },
                {
                    id: 10,
                    question: "What is the unit of inductance?",
                    options: [
                        { letter: "A", text: "Henry (H)", correct: true },
                        { letter: "B", text: "Farad (F)", correct: false },
                        { letter: "C", text: "Ohm (Ω)", correct: false },
                        { letter: "D", text: "Tesla (T)", correct: false }
                    ]
                },
                {
                    id: 11,
                    question: "What does an LED stand for?",
                    options: [
                        { letter: "A", text: "Light Emitting Diode", correct: true },
                        { letter: "B", text: "Low Energy Device", correct: false },
                        { letter: "C", text: "Linear Electronic Device", correct: false },
                        { letter: "D", text: "Luminous Emitting Device", correct: false }
                    ]
                },
                {
                    id: 12,
                    question: "What is a circuit?",
                    options: [
                        { letter: "A", text: "A closed path for electric current", correct: true },
                        { letter: "B", text: "An open connection", correct: false },
                        { letter: "C", text: "A power source", correct: false },
                        { letter: "D", text: "A measurement device", correct: false }
                    ]
                },
                {
                    id: 13,
                    question: "What is power measured in?",
                    options: [
                        { letter: "A", text: "Watts (W)", correct: true },
                        { letter: "B", text: "Volts (V)", correct: false },
                        { letter: "C", text: "Amperes (A)", correct: false },
                        { letter: "D", text: "Ohms (Ω)", correct: false }
                    ]
                },
                {
                    id: 14,
                    question: "What is the function of an inductor?",
                    options: [
                        { letter: "A", text: "Store energy in a magnetic field", correct: true },
                        { letter: "B", text: "Store energy in an electric field", correct: false },
                        { letter: "C", text: "Amplify signals", correct: false },
                        { letter: "D", text: "Convert AC to DC", correct: false }
                    ]
                },
                {
                    id: 15,
                    question: "What is Kirchhoff's Voltage Law (KVL)?",
                    options: [
                        { letter: "A", text: "Sum of voltages around a loop equals zero", correct: true },
                        { letter: "B", text: "Voltage equals current times resistance", correct: false },
                        { letter: "C", text: "Current is constant in series", correct: false },
                        { letter: "D", text: "Resistance increases with length", correct: false }
                    ]
                }
            ]
        }
    ],
    // Subject-wise Academic Quizzes with different question types
    math: [
        {
            id: 101,
            title: "Mathematics - Algebra Basics (Easy)",
            course: "Mathematics",
            questions: 10,
            timeLimit: 20,
            status: "pending",
            type: "academic",
            difficulty: "easy",
            questionsList: [
                {
                    id: 1,
                    question: "Find the value of x: 3x + 7 = 16",
                    questionType: "fill-in-the-blank",
                    correctAnswer: "3",
                    hint: "Subtract 7 from both sides, then divide by 3"
                },
                {
                    id: 2,
                    question: "What is 2x - 5 = 11?",
                    questionType: "mcq",
                    options: [
                        { letter: "A", text: "x = 8", correct: true },
                        { letter: "B", text: "x = 6", correct: false },
                        { letter: "C", text: "x = 3", correct: false },
                        { letter: "D", text: "x = 10", correct: false }
                    ]
                },
                {
                    id: 3,
                    question: "Solve for x: 5x = 25",
                    questionType: "short-answer",
                    correctAnswer: "5",
                    acceptedAnswers: ["5", "x = 5", "x=5"]
                }
            ]
        },
        {
            id: 102,
            title: "Mathematics - Advanced Algebra (Hard)",
            course: "Mathematics",
            questions: 12,
            timeLimit: 30,
            status: "pending",
            type: "academic",
            difficulty: "hard",
            questionsList: [
                {
                    id: 1,
                    question: "Solve the quadratic equation: x² - 5x + 6 = 0",
                    questionType: "short-answer",
                    correctAnswer: "x = 2, x = 3",
                    acceptedAnswers: ["x = 2, x = 3", "x=2, x=3", "2 and 3", "2, 3"]
                },
                {
                    id: 2,
                    question: "What is the value of x if 2x² = 18?",
                    questionType: "mcq",
                    options: [
                        { letter: "A", text: "x = 3", correct: true },
                        { letter: "B", text: "x = 9", correct: false },
                        { letter: "C", text: "x = 6", correct: false },
                        { letter: "D", text: "x = 12", correct: false }
                    ]
                }
            ]
        }
    ],
    literature: [
        {
            id: 103,
            title: "Literature - Classic Authors (Medium)",
            course: "Literature",
            questions: 8,
            timeLimit: 15,
            status: "pending",
            type: "academic",
            difficulty: "medium",
            questionsList: [
                {
                    id: 1,
                    question: "Who wrote 'Romeo and Juliet'?",
                    questionType: "mcq",
                    options: [
                        { letter: "A", text: "William Shakespeare", correct: true },
                        { letter: "B", text: "Charles Dickens", correct: false },
                        { letter: "C", text: "Jane Austen", correct: false },
                        { letter: "D", text: "Mark Twain", correct: false }
                    ]
                },
                {
                    id: 2,
                    question: "The author of 'Pride and Prejudice' is _____",
                    questionType: "fill-in-the-blank",
                    correctAnswer: "Jane Austen",
                    acceptedAnswers: ["Jane Austen", "Austen"]
                },
                {
                    id: 3,
                    question: "Name the author of '1984'",
                    questionType: "short-answer",
                    correctAnswer: "George Orwell",
                    acceptedAnswers: ["George Orwell", "Orwell"]
                }
            ]
        }
    ],
    science: [
        {
            id: 104,
            title: "Science - Physics Basics (Easy)",
            course: "Science",
            questions: 10,
            timeLimit: 20,
            status: "pending",
            type: "academic",
            difficulty: "easy",
            questionsList: [
                {
                    id: 1,
                    question: "What is the SI unit of force?",
                    questionType: "mcq",
                    options: [
                        { letter: "A", text: "Newton (N)", correct: true },
                        { letter: "B", text: "Joule (J)", correct: false },
                        { letter: "C", text: "Watt (W)", correct: false },
                        { letter: "D", text: "Pascal (Pa)", correct: false }
                    ]
                },
                {
                    id: 2,
                    question: "The SI unit of energy is _____",
                    questionType: "fill-in-the-blank",
                    correctAnswer: "Joule",
                    acceptedAnswers: ["Joule", "J", "joule"]
                },
                {
                    id: 3,
                    question: "What is the formula for kinetic energy?",
                    questionType: "short-answer",
                    correctAnswer: "KE = ½mv²",
                    acceptedAnswers: ["KE = ½mv²", "KE = 1/2mv^2", "1/2mv²", "½mv²"]
                }
            ]
        }
    ],
    // Skill-based Quizzes
    'skill-based': [
        {
            id: 201,
            title: "Coding Logic Quiz - Output Prediction",
            course: "Skill-based",
            questions: 10,
            timeLimit: 25,
            status: "pending",
            type: "skill-based",
            category: "coding-logic",
            questionsList: [
                {
                    id: 1,
                    question: "What is the output of: print(2 + 3 * 4)?",
                    questionType: "mcq",
                    options: [
                        { letter: "A", text: "20", correct: false },
                        { letter: "B", text: "14", correct: true },
                        { letter: "C", text: "24", correct: false },
                        { letter: "D", text: "Error", correct: false }
                    ]
                },
                {
                    id: 2,
                    question: "What does this code output? x = [1,2,3]; print(x[1:])",
                    questionType: "short-answer",
                    correctAnswer: "[2, 3]",
                    acceptedAnswers: ["[2, 3]", "[2,3]", "2, 3"]
                },
                {
                    id: 3,
                    question: "Debug: What's wrong with this code? for i in range(5) print(i)",
                    questionType: "short-answer",
                    correctAnswer: "Missing colon",
                    acceptedAnswers: ["Missing colon", "colon", "missing :", ": missing"]
                }
            ]
        },
        {
            id: 202,
            title: "Communication Skills - Grammar & Comprehension",
            course: "Skill-based",
            questions: 12,
            timeLimit: 20,
            status: "pending",
            type: "skill-based",
            category: "communication",
            questionsList: [
                {
                    id: 1,
                    question: "Choose the correct sentence:",
                    questionType: "mcq",
                    options: [
                        { letter: "A", text: "She don't like pizza", correct: false },
                        { letter: "B", text: "She doesn't like pizza", correct: true },
                        { letter: "C", text: "She doesn't likes pizza", correct: false },
                        { letter: "D", text: "She don't likes pizza", correct: false }
                    ]
                },
                {
                    id: 2,
                    question: "Fill in the blank: I _____ to the store yesterday.",
                    questionType: "fill-in-the-blank",
                    correctAnswer: "went",
                    acceptedAnswers: ["went", "go", "gone"]
                }
            ]
        },
        {
            id: 203,
            title: "Entrepreneurship - Decision Making Scenarios",
            course: "Skill-based",
            questions: 8,
            timeLimit: 15,
            status: "pending",
            type: "skill-based",
            category: "entrepreneurship",
            questionsList: [
                {
                    id: 1,
                    question: "Your startup has limited funds. Should you:",
                    questionType: "mcq",
                    options: [
                        { letter: "A", text: "Spend all on marketing", correct: false },
                        { letter: "B", text: "Balance product development and marketing", correct: true },
                        { letter: "C", text: "Save all money", correct: false },
                        { letter: "D", text: "Hire expensive consultants", correct: false }
                    ]
                },
                {
                    id: 2,
                    question: "A competitor launches a similar product. Your best response is:",
                    questionType: "short-answer",
                    correctAnswer: "Focus on unique value proposition",
                    acceptedAnswers: ["Focus on unique value", "Differentiate", "Improve product", "Find unique selling point"]
                }
            ]
        },
        {
            id: 204,
            title: "AI & Technology Awareness Quiz",
            course: "Skill-based",
            questions: 10,
            timeLimit: 20,
            status: "pending",
            type: "skill-based",
            category: "ai-tech",
            questionsList: [
                {
                    id: 1,
                    question: "What does GPT stand for?",
                    questionType: "mcq",
                    options: [
                        { letter: "A", text: "Generative Pre-trained Transformer", correct: true },
                        { letter: "B", text: "General Purpose Technology", correct: false },
                        { letter: "C", text: "Global Processing Tool", correct: false },
                        { letter: "D", text: "Graph Processing Technology", correct: false }
                    ]
                },
                {
                    id: 2,
                    question: "What is machine learning?",
                    questionType: "short-answer",
                    correctAnswer: "AI that learns from data",
                    acceptedAnswers: ["AI that learns from data", "Learning from data", "Pattern recognition", "Data-driven AI"]
                }
            ]
        }
    ],
    // Career & Professional Development Quizzes
    career: [
        {
            id: 301,
            title: "Resume Building Quiz",
            course: "Career Development",
            questions: 8,
            timeLimit: 15,
            status: "pending",
            type: "career",
            category: "resume",
            questionsList: [
                {
                    id: 1,
                    question: "What should be the ideal length of a resume?",
                    questionType: "mcq",
                    options: [
                        { letter: "A", text: "1-2 pages", correct: true },
                        { letter: "B", text: "5+ pages", correct: false },
                        { letter: "C", text: "Half a page", correct: false },
                        { letter: "D", text: "No limit", correct: false }
                    ]
                },
                {
                    id: 2,
                    question: "True or False: You should include every job you've ever had.",
                    questionType: "mcq",
                    options: [
                        { letter: "A", text: "True", correct: false },
                        { letter: "B", text: "False - Only relevant experience", correct: true }
                    ]
                }
            ]
        },
        {
            id: 302,
            title: "Interview Readiness Quiz",
            course: "Career Development",
            questions: 10,
            timeLimit: 20,
            status: "pending",
            type: "career",
            category: "interview",
            questionsList: [
                {
                    id: 1,
                    question: "What's the best way to answer 'Tell me about yourself'?",
                    questionType: "mcq",
                    options: [
                        { letter: "A", text: "Give a brief personal story", correct: false },
                        { letter: "B", text: "Focus on professional background relevant to the role", correct: true },
                        { letter: "C", text: "List all your hobbies", correct: false },
                        { letter: "D", text: "Say 'I don't know'", correct: false }
                    ]
                },
                {
                    id: 2,
                    question: "How should you prepare for an interview?",
                    questionType: "short-answer",
                    correctAnswer: "Research company, prepare questions, practice answers",
                    acceptedAnswers: ["Research company", "Prepare questions", "Practice", "Research and prepare"]
                }
            ]
        },
        {
            id: 303,
            title: "Workplace Etiquette Quiz",
            course: "Career Development",
            questions: 8,
            timeLimit: 15,
            status: "pending",
            type: "career",
            category: "etiquette",
            questionsList: [
                {
                    id: 1,
                    question: "What's appropriate for workplace communication?",
                    questionType: "mcq",
                    options: [
                        { letter: "A", text: "Professional and respectful", correct: true },
                        { letter: "B", text: "Casual and friendly only", correct: false },
                        { letter: "C", text: "Very formal always", correct: false },
                        { letter: "D", text: "Whatever feels right", correct: false }
                    ]
                }
            ]
        },
        {
            id: 304,
            title: "Soft Skills & Leadership Quiz",
            course: "Career Development",
            questions: 10,
            timeLimit: 20,
            status: "pending",
            type: "career",
            category: "leadership",
            questionsList: [
                {
                    id: 1,
                    question: "What is a key trait of effective leadership?",
                    questionType: "mcq",
                    options: [
                        { letter: "A", text: "Communication and empathy", correct: true },
                        { letter: "B", text: "Always being right", correct: false },
                        { letter: "C", text: "Never asking for help", correct: false },
                        { letter: "D", text: "Working alone", correct: false }
                    ]
                }
            ]
        }
    ],
    // Challenge Mode / Weekly Trivia
    challenge: [
        {
            id: 401,
            title: "Weekly Challenge - Mixed Trivia",
            course: "Challenge Mode",
            questions: 15,
            timeLimit: 20,
            status: "pending",
            type: "challenge",
            category: "weekly-trivia",
            rewardPoints: 100,
            badge: "Weekly Champion",
            questionsList: [
                {
                    id: 1,
                    question: "What is the capital of France?",
                    questionType: "mcq",
                    options: [
                        { letter: "A", text: "London", correct: false },
                        { letter: "B", text: "Paris", correct: true },
                        { letter: "C", text: "Berlin", correct: false },
                        { letter: "D", text: "Madrid", correct: false }
                    ]
                },
                {
                    id: 2,
                    question: "What is 2 + 2?",
                    questionType: "fill-in-the-blank",
                    correctAnswer: "4"
                },
                {
                    id: 3,
                    question: "Name the largest planet in our solar system",
                    questionType: "short-answer",
                    correctAnswer: "Jupiter",
                    acceptedAnswers: ["Jupiter", "jupiter"]
                }
            ]
        }
    ]
};

// ============================================
// Global State Management
// ============================================
let currentQuiz = null;
let currentQuestionIndex = 0;
let userAnswers = {};
let quizTimer = null;
let timeRemaining = 0;
let quizStarted = false;

// ============================================
// DOM Elements
// ============================================
const sections = {
    dashboard: document.getElementById('dashboard-section'),
    quizzes: document.getElementById('quizzes-section'),
    courses: document.getElementById('courses-section')
};

const modals = {
    quiz: document.getElementById('quiz-modal'),
    results: document.getElementById('results-modal'),
    overlay: document.getElementById('modal-overlay')
};

// ============================================
// Navigation Functions
// ============================================

/**
 * Initialize navigation event listeners
 */
function initNavigation() {
    // Top navigation links
    document.querySelectorAll('.nav-link[data-page]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.getAttribute('data-page');
            switchPage(page);
            updateActiveNav(link);
        });
    });

    // Sidebar menu links
    document.querySelectorAll('.menu-link[data-section]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = link.getAttribute('data-section');
            switchSection(section);
            updateActiveMenu(link);
        });
    });

    // Course buttons
    document.querySelectorAll('.btn-course[data-course]').forEach(btn => {
        btn.addEventListener('click', () => {
            const courseId = btn.getAttribute('data-course');
            showQuizzesForCourse(courseId);
            switchPage('quizzes');
        });
    });
}

/**
 * Switch between main pages (Dashboard, Quizzes, Courses, Profile)
 */
function switchPage(page) {
    // Hide all sections
    Object.values(sections).forEach(section => {
        if (section) section.classList.remove('active');
    });

    // Show target section
    if (page === 'dashboard' && sections.dashboard) {
        sections.dashboard.classList.add('active');
    } else if (page === 'quizzes' && sections.quizzes) {
        sections.quizzes.classList.add('active');
        renderAllQuizzes();
    } else if (page === 'courses' && sections.courses) {
        sections.courses.classList.add('active');
    }
}

/**
 * Switch between sidebar sections
 */
function switchSection(section) {
    if (section === 'dashboard') {
        switchPage('dashboard');
    } else if (section === 'quizzes') {
        switchPage('quizzes');
    } else if (section === 'courses') {
        switchPage('courses');
    }
    // Add more section handlers as needed
}

/**
 * Update active state in top navigation
 */
function updateActiveNav(activeLink) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
    });
    activeLink.classList.add('active');
    activeLink.setAttribute('aria-current', 'page');
}

/**
 * Update active state in sidebar menu
 */
function updateActiveMenu(activeLink) {
    document.querySelectorAll('.menu-link').forEach(link => {
        link.classList.remove('active');
    });
    activeLink.classList.add('active');
}

// ============================================
// Quiz Filter Functions
// ============================================

/**
 * Initialize quiz filter tabs
 */
function initQuizFilters() {
    const filterTabs = document.querySelectorAll('.filter-tab');
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Update active state for tabs in the same group
            const group = tab.closest('.quiz-filter-tabs');
            if (group) {
                group.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
            }
            tab.classList.add('active');

            // Filter quizzes
            const course = tab.getAttribute('data-course');
            const difficulty = tab.getAttribute('data-difficulty');
            
            if (course !== null) {
                filterQuizzesByCourse(course);
            } else if (difficulty !== null) {
                filterQuizzesByDifficulty(difficulty);
            }
        });
    });
}

/**
 * Filter quizzes by difficulty level
 */
function filterQuizzesByDifficulty(difficulty) {
    loadQuizDataFromStorage();
    
    const container = document.getElementById('academic-quizzes-grid');
    if (!container) return;
    
    container.innerHTML = '';
    
    let allQuizzes = [];
    Object.keys(quizData).forEach(courseId => {
        quizData[courseId].forEach(quiz => {
            if (quiz.type === 'academic' || !quiz.type) {
                allQuizzes.push({ ...quiz, courseId });
            }
        });
    });
    
    if (difficulty !== 'all') {
        allQuizzes = allQuizzes.filter(quiz => quiz.difficulty === difficulty);
    }
    
    if (allQuizzes.length === 0) {
        container.innerHTML = `<p class="no-quizzes">No ${difficulty === 'all' ? '' : difficulty} academic quizzes available.</p>`;
        return;
    }
    
    allQuizzes.forEach(quiz => {
        container.appendChild(createQuizCard(quiz));
    });
}

/**
 * Filter quizzes by course
 */
function filterQuizzesByCourse(courseId) {
    // Reload quiz data first
    loadQuizDataFromStorage();
    
    const container = document.getElementById('academic-quizzes-grid') || document.getElementById('quizzes-container');
    if (!container) return;

    if (courseId === 'all') {
        renderAllQuizzes();
    } else {
        renderQuizzesForCourse(courseId);
    }
}

/**
 * Show quizzes for a specific course
 */
function showQuizzesForCourse(courseId) {
    switchPage('quizzes');
    
    // Make sure we're on academic quizzes tab
    const emotionalTab = document.querySelector('.quiz-type-tab[data-quiz-type="emotional"]');
    const academicTab = document.querySelector('.quiz-type-tab[data-quiz-type="academic"]');
    const emotionalContent = document.getElementById('emotional-quizzes');
    const academicContent = document.getElementById('academic-quizzes');
    
    if (emotionalTab && academicTab && emotionalContent && academicContent) {
        emotionalTab.classList.remove('active');
        academicTab.classList.add('active');
        emotionalContent.classList.remove('active');
        academicContent.classList.add('active');
    }
    
    // Wait a bit for tab switch, then filter
    setTimeout(() => {
        // Activate corresponding filter tab
        const tabs = document.querySelectorAll('.quiz-filter-tabs .filter-tab');
        tabs.forEach(tab => {
            if (tab.getAttribute('data-course') === courseId) {
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                filterQuizzesByCourse(courseId);
            }
        });
    }, 100);
}

// ============================================
// Quiz Rendering Functions
// ============================================

/**
 * Render all quizzes in the quizzes section
 */
function renderAllQuizzes() {
    // Reload quiz data to get latest scheduled quizzes
    loadQuizDataFromStorage();
    
    const container = document.getElementById('academic-quizzes-grid') || document.getElementById('quizzes-container');
    if (!container) return;

    container.innerHTML = '';
    
    // Combine all quizzes from all courses (only academic quizzes)
    let allQuizzes = [];
    Object.keys(quizData).forEach(courseId => {
        quizData[courseId].forEach(quiz => {
            // Only include academic quizzes
            if (quiz.type === 'academic' || !quiz.type) {
                allQuizzes.push({ ...quiz, courseId });
            }
        });
    });

    if (allQuizzes.length === 0) {
        container.innerHTML = '<p class="no-quizzes">No academic quizzes available.</p>';
        return;
    }

    allQuizzes.forEach(quiz => {
        container.appendChild(createQuizCard(quiz));
    });
}

/**
 * Render quizzes for a specific course
 */
function renderQuizzesForCourse(courseId) {
    // Reload quiz data to get latest scheduled quizzes
    loadQuizDataFromStorage();
    
    const container = document.getElementById('academic-quizzes-grid') || document.getElementById('quizzes-container');
    if (!container) return;

    container.innerHTML = '';

    // Get course name for display
    const courseNames = {
        python: 'Introduction to Python',
        webdev: 'Web Development',
        database: 'Database Design',
        ml: 'Machine Learning',
        electronics: 'Electronics & Engineering'
    };

    // Only get quizzes for this specific course
    const courseQuizzes = (quizData[courseId] || []).filter(quiz => 
        (quiz.type === 'academic' || !quiz.type)
    );
    
    if (courseQuizzes.length === 0) {
        container.innerHTML = `<p class="no-quizzes">No academic quizzes available for ${courseNames[courseId] || 'this course'}.</p>`;
        return;
    }

    // Show course name header
    const header = document.createElement('div');
    header.style.marginBottom = '1rem';
    header.style.padding = '1rem';
    header.style.background = 'var(--bg-secondary)';
    header.style.borderRadius = 'var(--radius-md)';
    header.innerHTML = `<h3 style="margin: 0; color: var(--text-primary);">📚 ${courseNames[courseId] || 'Course'} Quizzes</h3>`;
    container.appendChild(header);

    courseQuizzes.forEach(quiz => {
        container.appendChild(createQuizCard(quiz, courseId));
    });
}

/**
 * Create a quiz card element
 */
function createQuizCard(quiz, courseId = null) {
    const card = document.createElement('div');
    card.className = 'quiz-card-item';
    card.setAttribute('data-quiz-id', quiz.id);

    const statusClass = quiz.status === 'completed' ? 'quiz-status-completed' : 'quiz-status-pending';
    const statusText = quiz.status === 'completed' ? 'Completed' : 'Pending';
    const buttonText = quiz.status === 'completed' ? 'View Results' : 'Start Quiz';
    const buttonClass = quiz.status === 'completed' ? 'btn-secondary' : 'btn-primary';
    
    // Difficulty badge
    let difficultyBadge = '';
    if (quiz.difficulty) {
        const difficultyColors = {
            easy: '#28a745',
            medium: '#ffc107',
            hard: '#dc3545'
        };
        const difficultyLabels = {
            easy: 'Easy',
            medium: 'Medium',
            hard: 'Hard'
        };
        difficultyBadge = `<span style="background: ${difficultyColors[quiz.difficulty]}; color: white; padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.75rem; font-weight: 600;">${difficultyLabels[quiz.difficulty]}</span>`;
    }
    
    // Reward points badge for challenge mode
    let rewardBadge = '';
    if (quiz.rewardPoints) {
        rewardBadge = `<span style="background: #6f42c1; color: white; padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.75rem; font-weight: 600;">🏆 ${quiz.rewardPoints} Points</span>`;
    }

    card.innerHTML = `
        <div class="quiz-card-header">
            <h3 class="quiz-card-title">${quiz.title}</h3>
            <div style="display: flex; gap: 0.5rem; align-items: center;">
                ${difficultyBadge}
                ${rewardBadge}
                <span class="quiz-status-badge ${statusClass}">${statusText}</span>
            </div>
        </div>
        <div class="quiz-card-meta">
            <div class="quiz-meta-item">
                <span>📚</span>
                <span>${quiz.course}</span>
            </div>
            <div class="quiz-meta-item">
                <span>❓</span>
                <span>${quiz.questions} Questions</span>
            </div>
            <div class="quiz-meta-item">
                <span>⏱️</span>
                <span>${quiz.timeLimit} min</span>
            </div>
        </div>
        <div class="quiz-card-actions">
                    <button class="btn btn-sm ${buttonClass} start-quiz-btn" 
                            data-quiz-id="${quiz.id}" 
                            data-course-id="${courseId || getCourseIdForQuiz(quiz.id)}"
                            data-status="${quiz.status}"
                            ${(!quiz.questionsList || quiz.questionsList.length === 0) && quiz.status === 'pending' ? 'disabled title="Quiz questions are being added"' : ''}>
                        ${(!quiz.questionsList || quiz.questionsList.length === 0) && quiz.status === 'pending' ? 'Coming Soon' : buttonText}
                    </button>
        </div>
    `;

    // Add event listener to start quiz button
    const startBtn = card.querySelector('.start-quiz-btn');
    startBtn.addEventListener('click', () => {
        if (quiz.status === 'completed') {
            showQuizResults(quiz);
        } else {
            startQuiz(quiz, courseId || getCourseIdForQuiz(quiz.id));
        }
    });

    return card;
}

/**
 * Get course ID for a quiz
 */
function getCourseIdForQuiz(quizId) {
    for (const [courseId, quizzes] of Object.entries(quizData)) {
        if (quizzes.some(q => q.id === quizId)) {
            return courseId;
        }
    }
    return null;
}

// ============================================
// Quiz Attempt Functions
// ============================================

/**
 * Start a quiz
 */
function startQuiz(quiz, courseId) {
    // Check if quiz has questions
    if (!quiz.questionsList || quiz.questionsList.length === 0) {
        alert('This quiz is still being set up by the instructor. Questions are being added. Please check back later.');
        return;
    }

    currentQuiz = quiz;
    currentQuestionIndex = 0;
    userAnswers = {};
    timeRemaining = quiz.timeLimit * 60; // Convert to seconds
    quizStarted = true;

    // Initialize user answers object
    if (quiz.questionsList) {
        quiz.questionsList.forEach((q, index) => {
            userAnswers[index] = null;
        });
    }

    // Open quiz modal
    openModal(modals.quiz);

    // Load first question
    loadQuestion(0);

    // Start timer
    startTimer();

    // Update modal title
    const modalTitle = document.getElementById('quiz-modal-title');
    const modalSubtitle = document.getElementById('quiz-subtitle');
    if (modalTitle) {
        modalTitle.textContent = `Quiz: ${quiz.title}`;
    }
    if (modalSubtitle) {
        modalSubtitle.textContent = `Course: ${quiz.course}`;
    }

    // Update progress
    updateQuizProgress();

    // Update answered count
    updateAnsweredCount();
}

/**
 * Load a specific question
 */
function loadQuestion(index) {
    if (!currentQuiz || !currentQuiz.questionsList) return;

    const question = currentQuiz.questionsList[index];
    if (!question) return;

    currentQuestionIndex = index;

    // Update question display
    const questionNumber = document.getElementById('question-number');
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');

    if (questionNumber) {
        questionNumber.textContent = `Question ${index + 1}`;
    }

    if (questionText) {
        questionText.textContent = question.question;
    }

    if (optionsContainer) {
        optionsContainer.innerHTML = '';
        
        // Determine question type (default to MCQ if not specified)
        const questionType = question.questionType || (question.options ? 'mcq' : 'short-answer');
        
        if (questionType === 'mcq' && question.options) {
            // Multiple Choice Question
            question.options.forEach(option => {
                const label = document.createElement('label');
                label.className = 'option-label';
                
                const isSelected = userAnswers[index] === option.letter;
                if (isSelected) {
                    label.classList.add('selected');
                }

                label.innerHTML = `
                    <input type="radio" 
                           name="quiz-answer" 
                           value="${option.letter}" 
                           class="option-input"
                           ${isSelected ? 'checked' : ''}>
                    <span class="option-text">
                        <span class="option-letter">${option.letter})</span>
                        ${option.text}
                    </span>
                `;

                // Add change listener
                const radio = label.querySelector('input[type="radio"]');
                radio.addEventListener('change', () => {
                    // Remove selected from all labels
                    optionsContainer.querySelectorAll('.option-label').forEach(l => {
                        l.classList.remove('selected');
                    });
                    // Add selected to current label
                    label.classList.add('selected');
                    
                    // Save answer
                    userAnswers[index] = option.letter;
                    updateAnsweredCount();
                });

                optionsContainer.appendChild(label);
            });
        } else if (questionType === 'fill-in-the-blank') {
            // Fill in the blank question
            const inputContainer = document.createElement('div');
            inputContainer.style.marginTop = '1rem';
            
            const input = document.createElement('input');
            input.type = 'text';
            input.className = 'form-input';
            input.style.width = '100%';
            input.style.padding = '0.75rem';
            input.style.border = '2px solid var(--border-light)';
            input.style.borderRadius = 'var(--radius-md)';
            input.placeholder = 'Enter your answer here...';
            input.value = userAnswers[index] || '';
            
            if (question.hint) {
                const hintDiv = document.createElement('div');
                hintDiv.style.marginTop = '0.5rem';
                hintDiv.style.fontSize = '0.875rem';
                hintDiv.style.color = 'var(--text-secondary)';
                hintDiv.innerHTML = `<em>💡 Hint: ${question.hint}</em>`;
                inputContainer.appendChild(hintDiv);
            }
            
            input.addEventListener('input', (e) => {
                userAnswers[index] = e.target.value.trim();
                updateAnsweredCount();
            });
            
            inputContainer.insertBefore(input, inputContainer.firstChild);
            optionsContainer.appendChild(inputContainer);
        } else if (questionType === 'short-answer') {
            // Short answer question
            const textarea = document.createElement('textarea');
            textarea.className = 'form-textarea';
            textarea.style.width = '100%';
            textarea.style.minHeight = '100px';
            textarea.style.padding = '0.75rem';
            textarea.style.border = '2px solid var(--border-light)';
            textarea.style.borderRadius = 'var(--radius-md)';
            textarea.placeholder = 'Type your answer here...';
            textarea.value = userAnswers[index] || '';
            
            if (question.hint) {
                const hintDiv = document.createElement('div');
                hintDiv.style.marginTop = '0.5rem';
                hintDiv.style.fontSize = '0.875rem';
                hintDiv.style.color = 'var(--text-secondary)';
                hintDiv.innerHTML = `<em>💡 Hint: ${question.hint}</em>`;
                optionsContainer.appendChild(hintDiv);
            }
            
            textarea.addEventListener('input', (e) => {
                userAnswers[index] = e.target.value.trim();
                updateAnsweredCount();
            });
            
            optionsContainer.appendChild(textarea);
        }
    }

    // Update navigation buttons
    updateNavigationButtons();
    updateQuizProgress();
}

/**
 * Update navigation buttons state
 */
function updateNavigationButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');

    if (prevBtn) {
        prevBtn.disabled = currentQuestionIndex === 0;
    }

    if (nextBtn && submitBtn) {
        const isLastQuestion = currentQuestionIndex === currentQuiz.questionsList.length - 1;
        nextBtn.style.display = isLastQuestion ? 'none' : 'inline-flex';
        submitBtn.style.display = isLastQuestion ? 'inline-flex' : 'none';
    }
}

/**
 * Navigate to next question
 */
function nextQuestion() {
    if (!currentQuiz || !currentQuiz.questionsList) return;
    
    if (currentQuestionIndex < currentQuiz.questionsList.length - 1) {
        loadQuestion(currentQuestionIndex + 1);
    }
}

/**
 * Navigate to previous question
 */
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        loadQuestion(currentQuestionIndex - 1);
    }
}

/**
 * Update quiz progress bar
 */
function updateQuizProgress() {
    if (!currentQuiz || !currentQuiz.questionsList) return;

    const totalQuestions = currentQuiz.questionsList.length;
    const current = currentQuestionIndex + 1;
    const percentage = (current / totalQuestions) * 100;

    const progressFill = document.getElementById('quiz-progress-fill');
    const currentQuestionSpan = document.getElementById('current-question');
    const totalQuestionsSpan = document.getElementById('total-questions');

    if (progressFill) {
        progressFill.style.width = `${percentage}%`;
    }

    if (currentQuestionSpan) {
        currentQuestionSpan.textContent = current;
    }

    if (totalQuestionsSpan) {
        totalQuestionsSpan.textContent = totalQuestions;
    }
}

/**
 * Update answered questions count
 */
function updateAnsweredCount() {
    if (!currentQuiz || !currentQuiz.questionsList) return;

    const total = currentQuiz.questionsList.length;
    const answered = Object.values(userAnswers).filter(a => a !== null).length;

    const answeredCountSpan = document.getElementById('answered-count');
    const totalQuestionsFooter = document.getElementById('total-questions-footer');

    if (answeredCountSpan) {
        answeredCountSpan.textContent = answered;
    }

    if (totalQuestionsFooter) {
        totalQuestionsFooter.textContent = total;
    }
}

// ============================================
// Timer Functions
// ============================================

/**
 * Start the quiz timer
 */
function startTimer() {
    updateTimerDisplay();

    quizTimer = setInterval(() => {
        timeRemaining--;

        if (timeRemaining <= 0) {
            clearInterval(quizTimer);
            timeRemaining = 0;
            autoSubmitQuiz();
            return;
        }

        updateTimerDisplay();

        // Warning when 5 minutes remaining
        if (timeRemaining === 300) {
            showTimerWarning();
        }

        // Urgent warning when 1 minute remaining
        if (timeRemaining === 60) {
            showTimerUrgent();
        }
    }, 1000);
}

/**
 * Update timer display
 */
function updateTimerDisplay() {
    const timeDisplay = document.getElementById('time-display');
    if (!timeDisplay) return;

    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    timeDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    // Change color when time is running low
    const timerElement = document.querySelector('.quiz-timer');
    if (timerElement) {
        if (timeRemaining <= 60) {
            timerElement.style.color = '#dc3545'; // Red
        } else if (timeRemaining <= 300) {
            timerElement.style.color = '#ffc107'; // Amber
        } else {
            timerElement.style.color = '';
        }
    }
}

/**
 * Show timer warning
 */
function showTimerWarning() {
    // Could show a toast notification here
    console.log('5 minutes remaining!');
}

/**
 * Show urgent timer warning
 */
function showTimerUrgent() {
    // Could show an urgent notification here
    console.log('1 minute remaining!');
}

/**
 * Stop the timer
 */
function stopTimer() {
    if (quizTimer) {
        clearInterval(quizTimer);
        quizTimer = null;
    }
}

// ============================================
// Quiz Submission Functions
// ============================================

/**
 * Submit the quiz
 */
function submitQuiz() {
    if (!currentQuiz || !currentQuiz.questionsList) return;

    // Confirm submission
    const confirmed = confirm('Are you sure you want to submit the quiz? You cannot change your answers after submission.');
    if (!confirmed) return;

    // Stop timer
    stopTimer();

    // For emotional quizzes, show insights instead of scores
    if (currentQuiz.type === 'emotional') {
        showEmotionalQuizInsights(currentQuiz);
        closeModal(modals.quiz);
        resetQuizState();
        setTimeout(() => showFeedbackModal(), 1500);
        return;
    }

    // Calculate results for academic quizzes
    const results = calculateResults();

    // Save quiz result to grades (only for academic quizzes)
    if (currentQuiz.type === 'academic') {
        saveQuizResult(currentQuiz, results);
    }

    // Show results modal
    showQuizResults(currentQuiz, results);

    // Close quiz modal
    closeModal(modals.quiz);

    // Store quiz type before reset
    const quizType = currentQuiz.type;

    // Update quiz status
    if (currentQuiz.id) {
        updateQuizStatus(currentQuiz.id, 'completed');
    }

    // Reset quiz state
    resetQuizState();
}

/**
 * Save quiz result to the results array
 */
function saveQuizResult(quiz, results) {
    // Check if result already exists
    const existingIndex = quizResults.findIndex(r => r.id === quiz.id);
    
    const resultData = {
        id: quiz.id,
        quizTitle: quiz.title,
        course: quiz.course,
        score: results.score,
        maxScore: results.maxScore,
        date: new Date().toISOString().split('T')[0],
        percentage: results.percentage
    };

    if (existingIndex >= 0) {
        // Update existing result
        quizResults[existingIndex] = resultData;
    } else {
        // Add new result
        quizResults.push(resultData);
    }

    // Sort by date (newest first)
    quizResults.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    // Refresh grades display if on grades page
    if (document.getElementById('grades-section')?.classList.contains('active')) {
        renderGradesOverview();
        renderQuizResults();
    }
}

/**
 * Update quiz status in quizData
 */
function updateQuizStatus(quizId, status) {
    for (const courseId in quizData) {
        const quizzes = quizData[courseId];
        const quiz = quizzes.find(q => q.id === quizId);
        if (quiz) {
            quiz.status = status;
            break;
        }
    }
}

/**
 * Auto-submit when time runs out
 */
function autoSubmitQuiz() {
    if (!currentQuiz || !currentQuiz.questionsList) return;

    alert('Time is up! Your quiz has been automatically submitted.');

    // Calculate results
    const results = calculateResults();

    // Save quiz result to grades (only for academic quizzes)
    if (currentQuiz.type === 'academic') {
        saveQuizResult(currentQuiz, results);
    }

    // Show results
    showQuizResults(currentQuiz, results);

    // Close quiz modal
    closeModal(modals.quiz);

    // Update quiz status
    if (currentQuiz.id) {
        updateQuizStatus(currentQuiz.id, 'completed');
    }

    // Store quiz type before reset
    const quizType = currentQuiz.type;

    // Reset quiz state
    resetQuizState();

    // Show feedback for emotional quizzes
    if (quizType === 'emotional') {
        setTimeout(() => showFeedbackModal(), 1000);
    }
}

/**
 * Calculate quiz results
 */
function calculateResults() {
    if (!currentQuiz || !currentQuiz.questionsList) return null;

    const questions = currentQuiz.questionsList;
    let correct = 0;
    let incorrect = 0;
    const questionResults = [];

    questions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const questionType = question.questionType || (question.options ? 'mcq' : 'short-answer');
        let isCorrect = false;
        let correctAnswerText = '';
        let userAnswerText = userAnswer || 'Not answered';

        if (questionType === 'mcq' && question.options) {
            // Multiple Choice Question
            const correctOption = question.options.find(opt => opt.correct);
            isCorrect = userAnswer === correctOption?.letter;
            correctAnswerText = correctOption?.text || '';
            if (userAnswer) {
                const selectedOption = question.options.find(opt => opt.letter === userAnswer);
                userAnswerText = selectedOption?.text || userAnswer;
            }
        } else if (questionType === 'fill-in-the-blank' || questionType === 'short-answer') {
            // Fill-in-the-blank or Short Answer
            const correctAnswer = question.correctAnswer || '';
            const acceptedAnswers = question.acceptedAnswers || [correctAnswer];
            
            // Normalize answers for comparison (case-insensitive, trim)
            const normalizedUserAnswer = userAnswer ? userAnswer.trim().toLowerCase() : '';
            isCorrect = acceptedAnswers.some(ans => {
                const normalizedAns = ans.trim().toLowerCase();
                return normalizedUserAnswer === normalizedAns || 
                       normalizedUserAnswer.includes(normalizedAns) ||
                       normalizedAns.includes(normalizedUserAnswer);
            });
            
            correctAnswerText = correctAnswer;
            userAnswerText = userAnswer || 'Not answered';
        }

        if (isCorrect) {
            correct++;
        } else if (userAnswer) {
            incorrect++;
        }

        questionResults.push({
            question: question.question,
            userAnswer: userAnswerText,
            correctAnswer: correctAnswerText,
            isCorrect: isCorrect,
            wasAnswered: !!userAnswer,
            questionType: questionType
        });
    });

    const total = questions.length;
    const pointsPerQuestion = 10; // 10 points per question
    const scorePoints = correct * pointsPerQuestion; // Actual score in points
    const maxScore = total * pointsPerQuestion; // Maximum possible score
    const percentage = (correct / total) * 100;
    const timeTaken = (currentQuiz.timeLimit * 60) - timeRemaining;

    return {
        correct,
        incorrect,
        unanswered: total - correct - incorrect,
        total,
        score: scorePoints, // Score in points (e.g., 120/150)
        maxScore: maxScore, // Maximum score
        percentage: percentage, // Percentage score
        timeTaken,
        questionResults
    };
}

/**
 * Reset quiz state
 */
function resetQuizState() {
    currentQuiz = null;
    currentQuestionIndex = 0;
    userAnswers = {};
    timeRemaining = 0;
    quizStarted = false;
    stopTimer();
}

// ============================================
// Results Display Functions
// ============================================

/**
 * Show quiz results
 */
function showQuizResults(quiz, results = null) {
    // If results not provided, calculate them
    if (!results) {
        // This would typically fetch from server
        // For demo, create sample results
        results = {
            correct: 4,
            incorrect: 1,
            unanswered: 0,
            total: 5,
            score: 85,
            percentage: 85,
            timeTaken: 1456, // seconds
            questionResults: [
                {
                    question: "Which of the following is the correct way to create a list in Python?",
                    userAnswer: "list = [1, 2, 3]",
                    correctAnswer: "list = [1, 2, 3]",
                    isCorrect: true,
                    wasAnswered: true
                },
                {
                    question: "What is the output of print(2 ** 3)?",
                    userAnswer: "8",
                    correctAnswer: "8",
                    isCorrect: true,
                    wasAnswered: true
                },
                {
                    question: "How do you define a function in Python?",
                    userAnswer: "def function_name():",
                    correctAnswer: "def function_name():",
                    isCorrect: true,
                    wasAnswered: true
                },
                {
                    question: "Which data type is mutable in Python?",
                    userAnswer: "List",
                    correctAnswer: "List",
                    isCorrect: true,
                    wasAnswered: true
                },
                {
                    question: "What is Python?",
                    userAnswer: "A database system",
                    correctAnswer: "A high-level programming language",
                    isCorrect: false,
                    wasAnswered: true
                }
            ]
        };
    }

    // Update score display
    updateScoreDisplay(results);

    // Update statistics
    updateStatistics(results);

    // Update question breakdown
    updateQuestionBreakdown(results.questionResults);

    // Open results modal
    openModal(modals.results);
}

/**
 * Update score display
 */
function updateScoreDisplay(results) {
    const scoreValue = document.getElementById('score-value');
    const scoreGrade = document.getElementById('score-grade');
    const scoreCircle = document.getElementById('score-circle');

    if (scoreValue) {
        scoreValue.textContent = results.score;
    }

    if (scoreGrade) {
        const grade = getGrade(results.percentage);
        scoreGrade.textContent = `Grade: ${grade}`;
    }

    if (scoreCircle) {
        const circumference = 2 * Math.PI * 45;
        const offset = circumference - (results.percentage / 100) * circumference;
        scoreCircle.style.strokeDashoffset = offset;
    }
}

/**
 * Get letter grade
 */
function getGrade(percentage) {
    if (percentage >= 90) return 'A+';
    if (percentage >= 85) return 'A';
    if (percentage >= 80) return 'B+';
    if (percentage >= 75) return 'B';
    if (percentage >= 70) return 'C+';
    if (percentage >= 65) return 'C';
    if (percentage >= 60) return 'D';
    return 'F';
}

/**
 * Update statistics cards
 */
function updateStatistics(results) {
    const statCorrect = document.getElementById('stat-correct');
    const statIncorrect = document.getElementById('stat-incorrect');
    const statTime = document.getElementById('stat-time');
    const statAccuracy = document.getElementById('stat-accuracy');

    if (statCorrect) {
        statCorrect.textContent = results.correct;
    }

    if (statIncorrect) {
        statIncorrect.textContent = results.incorrect;
    }

    if (statTime) {
        const minutes = Math.floor(results.timeTaken / 60);
        const seconds = results.timeTaken % 60;
        statTime.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    if (statAccuracy) {
        const accuracy = results.total > 0 ? Math.round((results.correct / results.total) * 100) : 0;
        statAccuracy.textContent = `${accuracy}%`;
    }
}

/**
 * Update question breakdown list
 */
function updateQuestionBreakdown(questionResults) {
    const container = document.getElementById('questions-breakdown');
    if (!container) return;

    container.innerHTML = '';

    questionResults.forEach((result, index) => {
        const item = document.createElement('div');
        item.className = `question-result ${result.isCorrect ? 'correct' : 'incorrect'}`;

        item.innerHTML = `
            <div class="result-icon">${result.isCorrect ? '✓' : '✗'}</div>
            <div class="result-content">
                <p class="result-question">Question ${index + 1}: ${result.question}</p>
                <p class="result-answer">Your answer: ${result.wasAnswered ? result.userAnswer : 'Not answered'}</p>
                <p class="result-feedback">
                    ${result.isCorrect 
                        ? 'Correct! +10 points' 
                        : `Incorrect. Correct answer: ${result.correctAnswer}`
                    }
                </p>
            </div>
            <div class="result-score">
                ${result.isCorrect ? '+10' : '0'}
            </div>
        `;

        container.appendChild(item);
    });
}

// ============================================
// Modal Functions
// ============================================

/**
 * Open a modal
 */
function openModal(modal) {
    if (!modal) return;

    modal.setAttribute('aria-hidden', 'false');
    modal.classList.add('active');
    
    if (modals.overlay) {
        modals.overlay.setAttribute('aria-hidden', 'false');
        modals.overlay.classList.add('active');
    }

    document.body.style.overflow = 'hidden';

    // Focus on first focusable element
    const firstFocusable = modal.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (firstFocusable) {
        firstFocusable.focus();
    }
}

/**
 * Close a modal
 */
function closeModal(modal) {
    if (!modal) return;

    modal.setAttribute('aria-hidden', 'true');
    modal.classList.remove('active');

    if (modals.overlay) {
        modals.overlay.setAttribute('aria-hidden', 'true');
        modals.overlay.classList.remove('active');
    }

    document.body.style.overflow = '';
}

// ============================================
// Event Listeners
// ============================================

/**
 * Initialize all event listeners
 */
function initEventListeners() {
    // Quiz navigation buttons
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');
    const submitBtn = document.getElementById('submit-btn');
    const reviewBtn = document.getElementById('review-btn');

    if (nextBtn) {
        nextBtn.addEventListener('click', nextQuestion);
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', previousQuestion);
    }

    if (submitBtn) {
        submitBtn.addEventListener('click', submitQuiz);
    }

    if (reviewBtn) {
        reviewBtn.addEventListener('click', () => {
            // Mark current question for review (could add visual indicator)
            console.log('Question marked for review');
        });
    }

    // Modal close buttons
    const closeQuizModal = document.getElementById('close-quiz-modal');
    const closeResultsModal = document.getElementById('close-results-modal');
    const closeResultsBtn = document.getElementById('close-results-btn');
    const retakeQuizBtn = document.getElementById('retake-quiz-btn');

    if (closeQuizModal) {
        closeQuizModal.addEventListener('click', () => {
            const confirmed = quizStarted 
                ? confirm('Are you sure you want to close? Your progress will be saved.')
                : true;
            if (confirmed) {
                stopTimer();
                closeModal(modals.quiz);
                resetQuizState();
            }
        });
    }

    if (closeResultsModal) {
        closeResultsModal.addEventListener('click', () => closeModal(modals.results));
    }

    if (closeResultsBtn) {
        closeResultsBtn.addEventListener('click', () => closeModal(modals.results));
    }

    if (retakeQuizBtn) {
        retakeQuizBtn.addEventListener('click', () => {
            closeModal(modals.results);
            if (currentQuiz) {
                startQuiz(currentQuiz, getCourseIdForQuiz(currentQuiz.id));
            }
        });
    }

    // Close modal on overlay click
    if (modals.overlay) {
        modals.overlay.addEventListener('click', () => {
            if (modals.quiz.classList.contains('active')) {
                const confirmed = quizStarted 
                    ? confirm('Are you sure you want to close? Your progress will be saved.')
                    : true;
                if (confirmed) {
                    stopTimer();
                    closeModal(modals.quiz);
                    resetQuizState();
                }
            } else if (modals.results.classList.contains('active')) {
                closeModal(modals.results);
            }
        });
    }

    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (modals.quiz.classList.contains('active')) {
                const confirmed = quizStarted 
                    ? confirm('Are you sure you want to close? Your progress will be saved.')
                    : true;
                if (confirmed) {
                    stopTimer();
                    closeModal(modals.quiz);
                    resetQuizState();
                }
            } else if (modals.results.classList.contains('active')) {
                closeModal(modals.results);
            }
        }
    });
}

// ============================================
// User Session Management
// ============================================

/**
 * Get current user session
 */
function getCurrentUser() {
    const session = localStorage.getItem('lms_user');
    return session ? JSON.parse(session) : null;
}

/**
 * Update user display information
 */
function updateUserDisplay() {
    const user = getCurrentUser();
    if (!user) return;

    // Update header user info
    const userNameEl = document.getElementById('user-name');
    const userAvatarEl = document.getElementById('user-avatar');
    if (userNameEl) userNameEl.textContent = user.name || 'Student';
    if (userAvatarEl) {
        const initials = user.name ? user.name.split(' ').map(n => n[0]).join('').toUpperCase() : 'ST';
        userAvatarEl.textContent = initials.substring(0, 2);
    }
}

/**
 * Logout functionality
 */
function setupLogout() {
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            if (confirm('Are you sure you want to logout?')) {
                localStorage.removeItem('lms_user');
                window.location.href = 'login.html';
            }
        });
    }
}

// ============================================
// Motivational Quotes
// ============================================

const motivationalQuotes = [
    "💪 Believe you can and you're halfway there!",
    "🚀 Every expert was once a beginner. Keep learning!",
    "⭐ Success is the sum of small efforts repeated day in and day out.",
    "📚 The beautiful thing about learning is that no one can take it away from you.",
    "🎯 You don't have to be great to start, but you have to start to be great.",
    "🌟 Excellence is not a skill, it's an attitude.",
    "💡 The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice.",
    "🔥 Don't stop when you're tired. Stop when you're done!",
    "🌈 The future belongs to those who believe in the beauty of their dreams.",
    "🎓 Education is the most powerful weapon which you can use to change the world."
];

/**
 * Show motivational quote on login
 */
function showMotivationalQuote() {
    const quoteBanner = document.getElementById('quote-banner');
    const quoteText = document.getElementById('quote-text');
    const quoteClose = document.getElementById('quote-close');

    if (!quoteBanner || !quoteText) return;

    // Get random quote
    const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
    quoteText.textContent = randomQuote;

    // Check if quote was closed in this session
    const quoteClosed = sessionStorage.getItem('quote_closed');
    if (!quoteClosed) {
        quoteBanner.classList.remove('hidden');
    }

    // Close button functionality
    if (quoteClose) {
        quoteClose.addEventListener('click', () => {
            quoteBanner.classList.add('hidden');
            sessionStorage.setItem('quote_closed', 'true');
        });
    }
}

// ============================================
// Course Data with Attendance
// ============================================

const coursesData = [
    {
        id: 'python',
        title: 'Introduction to Python',
        code: 'CS101',
        icon: '🐍',
        description: 'Learn Python fundamentals including variables, data types, functions, and basic programming concepts.',
        progress: 65,
        attendance: 85,
        classesAttended: 17,
        totalClasses: 20
    },
    {
        id: 'webdev',
        title: 'Web Development',
        code: 'CS102',
        icon: '🌐',
        description: 'Master HTML, CSS, JavaScript, and modern frameworks to build responsive and interactive web applications.',
        progress: 45,
        attendance: 90,
        classesAttended: 18,
        totalClasses: 20
    },
    {
        id: 'database',
        title: 'Database Design',
        code: 'CS201',
        icon: '🗄️',
        description: 'Understand database concepts, SQL queries, normalization, and database management systems.',
        progress: 80,
        attendance: 75,
        classesAttended: 15,
        totalClasses: 20
    },
    {
        id: 'ml',
        title: 'Machine Learning',
        code: 'CS301',
        icon: '🤖',
        description: 'Explore machine learning algorithms, neural networks, and data preprocessing techniques.',
        progress: 30,
        attendance: 95,
        classesAttended: 19,
        totalClasses: 20
    },
    {
        id: 'electronics',
        title: 'Electronics & Engineering',
        code: 'EE101',
        icon: '⚡',
        description: 'Learn electronic circuits, components, circuit analysis, and engineering principles.',
        progress: 55,
        attendance: 80,
        classesAttended: 16,
        totalClasses: 20
    }
];

/**
 * Render course cards with attendance
 */
function renderCoursesWithAttendance(containerId = 'courses-list') {
    const container = document.getElementById(containerId);
    if (!container) return;

    const user = getCurrentUser();
    if (!user) return;

    container.innerHTML = '';

    // Load attendance from localStorage
    const allAttendance = JSON.parse(localStorage.getItem('lms_attendance') || '{}');

    coursesData.forEach(course => {
        // Calculate attendance from saved data
        let attended = course.classesAttended;
        let total = course.totalClasses;
        let attendancePercentage = course.attendance;
        
        if (user.userType === 'student' && allAttendance[course.id]) {
            let actualAttended = 0;
            let actualTotal = 0;
            
            Object.keys(allAttendance[course.id]).forEach(date => {
                const dayAttendance = allAttendance[course.id][date];
                if (dayAttendance[user.username]) {
                    actualTotal++;
                    if (dayAttendance[user.username] === 'present') {
                        actualAttended++;
                    }
                }
            });
            
            if (actualTotal > 0) {
                attended = actualAttended;
                total = actualTotal;
                attendancePercentage = Math.round((attended / total) * 100);
            }
        }
        const card = document.createElement('article');
        card.className = `course-card course-${course.id}`;
        card.setAttribute('data-course-id', course.id);

        card.innerHTML = `
            <div class="course-header">
                <div class="course-icon">${course.icon}</div>
                <div class="course-info">
                    <h3 class="course-title">${course.title}</h3>
                    <span class="course-code">${course.code}</span>
                </div>
            </div>
            <p class="course-description">${course.description}</p>
            <div class="course-progress">
                <div class="progress-label">
                    <span>Progress</span>
                    <span class="progress-percentage">${course.progress}%</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${course.progress}%"></div>
                </div>
            </div>
            <div class="course-attendance">
                <div class="attendance-info">
                    <span>Attendance</span>
                    <span class="attendance-percentage">${attendancePercentage}%</span>
                </div>
                <div class="attendance-bar">
                    <div class="attendance-fill" style="width: ${attendancePercentage}%"></div>
                </div>
                <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.5rem;">
                    ${attended} of ${total} classes attended
                </div>
            </div>
            <div class="course-footer">
                <button class="btn-course btn-primary" data-course="${course.id}">
                    View Course
                </button>
            </div>
        `;

        // Add click handler
        const viewBtn = card.querySelector('.btn-course');
        if (viewBtn) {
            viewBtn.addEventListener('click', () => {
                // Switch to quizzes page and show only this course's quizzes
                switchPage('quizzes');
                // Wait for DOM update then filter
                setTimeout(() => {
                    showQuizzesForCourse(course.id);
                }, 100);
            });
        }

        container.appendChild(card);
    });
}

// ============================================
// Emotional/Fun Quizzes
// ============================================

const emotionalQuizzes = [
    // 1. Self-Awareness & Emotional Intelligence Quizzes
    {
        id: 'stress-response',
        title: '🧘‍♀️ What\'s Your Stress Response Style?',
        description: 'Discover how you handle stress and learn personalized coping strategies',
        icon: '🧘‍♀️',
        category: 'self-awareness',
        questions: 6,
        timeLimit: 8,
        type: 'emotional',
        questionsList: [
            {
                id: 1,
                question: 'When you feel overwhelmed, what do you typically do first?',
                options: [
                    { letter: 'A', text: 'Take deep breaths and step away', correct: null },
                    { letter: 'B', text: 'Make a list and organize tasks', correct: null },
                    { letter: 'C', text: 'Talk to someone about it', correct: null },
                    { letter: 'D', text: 'Push through and keep working', correct: null }
                ]
            },
            {
                id: 2,
                question: 'How do you express gratitude?',
                options: [
                    { letter: 'A', text: 'I write it down in a journal', correct: null },
                    { letter: 'B', text: 'I tell people directly', correct: null },
                    { letter: 'C', text: 'I think about it silently', correct: null },
                    { letter: 'D', text: 'I show it through actions', correct: null }
                ]
            },
            {
                id: 3,
                question: 'Are you a morning thinker or night dreamer?',
                options: [
                    { letter: 'A', text: 'Morning thinker - I\'m most productive early', correct: null },
                    { letter: 'B', text: 'Night dreamer - I think better at night', correct: null },
                    { letter: 'C', text: 'Both - depends on the day', correct: null },
                    { letter: 'D', text: 'I don\'t notice a pattern', correct: null }
                ]
            },
            {
                id: 4,
                question: 'What motivates you the most?',
                options: [
                    { letter: 'A', text: 'Achieving goals and success', correct: null },
                    { letter: 'B', text: 'Helping others and making a difference', correct: null },
                    { letter: 'C', text: 'Personal growth and learning', correct: null },
                    { letter: 'D', text: 'Creative expression and freedom', correct: null }
                ]
            },
            {
                id: 5,
                question: 'What kind of learner are you?',
                options: [
                    { letter: 'A', text: 'Visual - I need to see diagrams and charts', correct: null },
                    { letter: 'B', text: 'Auditory - I learn best by listening', correct: null },
                    { letter: 'C', text: 'Kinesthetic - I learn by doing', correct: null },
                    { letter: 'D', text: 'Reading/Writing - I prefer text', correct: null }
                ]
            }
        ]
    },
    {
        id: 'gratitude-habits',
        title: '🌞 What Are Your Gratitude Habits?',
        description: 'Explore your positivity mindset and discover ways to cultivate more gratitude',
        icon: '🌞',
        category: 'positivity',
        questions: 5,
        timeLimit: 7,
        type: 'emotional',
        questionsList: [
            {
                id: 1,
                question: 'How positive is your mindset?',
                options: [
                    { letter: 'A', text: 'Very positive - I see the good in most situations', correct: null },
                    { letter: 'B', text: 'Generally positive with some challenges', correct: null },
                    { letter: 'C', text: 'Neutral - I take things as they come', correct: null },
                    { letter: 'D', text: 'I tend to focus on difficulties', correct: null }
                ]
            },
            {
                id: 2,
                question: 'What kind of small joys make you happiest?',
                options: [
                    { letter: 'A', text: 'Nature and outdoor activities', correct: null },
                    { letter: 'B', text: 'Time with friends and family', correct: null },
                    { letter: 'C', text: 'Creative activities and hobbies', correct: null },
                    { letter: 'D', text: 'Achieving small daily goals', correct: null }
                ]
            },
            {
                id: 3,
                question: 'What\'s your "good day" formula?',
                options: [
                    { letter: 'A', text: 'Productive study sessions + good food', correct: null },
                    { letter: 'B', text: 'Social connection + laughter', correct: null },
                    { letter: 'C', text: 'Creative time + relaxation', correct: null },
                    { letter: 'D', text: 'Exercise + nature + quiet time', correct: null }
                ]
            }
        ]
    },
    // 2. Stress Management & Mindfulness Quizzes
    {
        id: 'stress-management',
        title: '😌 How Well Do You Manage Pressure?',
        description: 'Learn about your stress management style and discover relaxation techniques',
        icon: '😌',
        category: 'stress-management',
        questions: 7,
        timeLimit: 10,
        type: 'emotional',
        questionsList: [
            {
                id: 1,
                question: 'How well do you manage pressure?',
                options: [
                    { letter: 'A', text: 'Very well - I stay calm under pressure', correct: null },
                    { letter: 'B', text: 'Pretty well - I have some strategies', correct: null },
                    { letter: 'C', text: 'Sometimes - it depends on the situation', correct: null },
                    { letter: 'D', text: 'I struggle with pressure', correct: null }
                ]
            },
            {
                id: 2,
                question: 'Find your perfect relaxation technique',
                options: [
                    { letter: 'A', text: 'Meditation and breathing exercises', correct: null },
                    { letter: 'B', text: 'Physical exercise or yoga', correct: null },
                    { letter: 'C', text: 'Listening to music or nature sounds', correct: null },
                    { letter: 'D', text: 'Creative activities or hobbies', correct: null }
                ]
            },
            {
                id: 3,
                question: 'What type of meditation suits you?',
                options: [
                    { letter: 'A', text: 'Guided meditation with instructions', correct: null },
                    { letter: 'B', text: 'Silent meditation with focus on breath', correct: null },
                    { letter: 'C', text: 'Walking meditation or movement', correct: null },
                    { letter: 'D', text: 'I haven\'t tried meditation yet', correct: null }
                ]
            },
            {
                id: 4,
                question: 'Do you take mindful breaks or push through?',
                options: [
                    { letter: 'A', text: 'I take regular mindful breaks', correct: null },
                    { letter: 'B', text: 'I try to take breaks but sometimes forget', correct: null },
                    { letter: 'C', text: 'I push through until I finish', correct: null },
                    { letter: 'D', text: 'I rarely take breaks', correct: null }
                ]
            },
            {
                id: 5,
                question: 'How often do you do something just for fun?',
                options: [
                    { letter: 'A', text: 'Daily - I make time for fun activities', correct: null },
                    { letter: 'B', text: 'A few times a week', correct: null },
                    { letter: 'C', text: 'Occasionally when I have time', correct: null },
                    { letter: 'D', text: 'Rarely - I\'m usually too busy', correct: null }
                ]
            }
        ]
    },
    // 3. Creativity & Hobby Quizzes
    {
        id: 'creative-hobby',
        title: '🎨 Which Creative Hobby Suits Your Mood Today?',
        description: 'Discover creative outlets that match your current energy and mood',
        icon: '🎨',
        category: 'creativity',
        questions: 6,
        timeLimit: 8,
        type: 'emotional',
        questionsList: [
            {
                id: 1,
                question: 'Which creative hobby suits your mood today?',
                options: [
                    { letter: 'A', text: 'Drawing or painting', correct: null },
                    { letter: 'B', text: 'Writing or journaling', correct: null },
                    { letter: 'C', text: 'Music - playing or listening', correct: null },
                    { letter: 'D', text: 'Crafting or building something', correct: null }
                ]
            },
            {
                id: 2,
                question: 'What\'s your artistic personality?',
                options: [
                    { letter: 'A', text: 'Builder - I like creating tangible things', correct: null },
                    { letter: 'B', text: 'Dreamer - I love imaginative expression', correct: null },
                    { letter: 'C', text: 'Planner - I enjoy organizing and designing', correct: null },
                    { letter: 'D', text: 'Explorer - I like trying new creative forms', correct: null }
                ]
            },
            {
                id: 3,
                question: 'Find your ideal weekend activity',
                options: [
                    { letter: 'A', text: 'Art project or creative workshop', correct: null },
                    { letter: 'B', text: 'Outdoor adventure or nature walk', correct: null },
                    { letter: 'C', text: 'Social gathering or event', correct: null },
                    { letter: 'D', text: 'Quiet time with books or movies', correct: null }
                ]
            }
        ]
    },
    // 4. Social Connection Quizzes
    {
        id: 'social-connection',
        title: '🤝 Are You a Good Listener?',
        description: 'Explore your communication style and social connection patterns',
        icon: '🤝',
        category: 'social',
        questions: 6,
        timeLimit: 8,
        type: 'emotional',
        questionsList: [
            {
                id: 1,
                question: 'Are you a good listener?',
                options: [
                    { letter: 'A', text: 'Yes - I focus fully on what others say', correct: null },
                    { letter: 'B', text: 'Usually - I try to listen well', correct: null },
                    { letter: 'C', text: 'Sometimes - I get distracted', correct: null },
                    { letter: 'D', text: 'I could improve my listening skills', correct: null }
                ]
            },
            {
                id: 2,
                question: 'How do you support friends emotionally?',
                options: [
                    { letter: 'A', text: 'I listen and offer empathy', correct: null },
                    { letter: 'B', text: 'I give practical advice and solutions', correct: null },
                    { letter: 'C', text: 'I share similar experiences', correct: null },
                    { letter: 'D', text: 'I show support through actions', correct: null }
                ]
            },
            {
                id: 3,
                question: 'Which type of friend are you in a group?',
                options: [
                    { letter: 'A', text: 'The organizer and planner', correct: null },
                    { letter: 'B', text: 'The listener and supporter', correct: null },
                    { letter: 'C', text: 'The energizer and motivator', correct: null },
                    { letter: 'D', text: 'The peacemaker and mediator', correct: null }
                ]
            },
            {
                id: 4,
                question: 'Do you prefer leading or collaborating?',
                options: [
                    { letter: 'A', text: 'Leading - I enjoy taking charge', correct: null },
                    { letter: 'B', text: 'Collaborating - I work best in teams', correct: null },
                    { letter: 'C', text: 'Both - depends on the situation', correct: null },
                    { letter: 'D', text: 'Following - I prefer to support others', correct: null }
                ]
            }
        ]
    },
    // 5. Motivation & Goal-Setting Quizzes
    {
        id: 'motivation-goals',
        title: '💫 What Inspires You to Keep Going?',
        description: 'Discover your motivation style and find your personal goal-setting approach',
        icon: '💫',
        category: 'motivation',
        questions: 7,
        timeLimit: 10,
        type: 'emotional',
        questionsList: [
            {
                id: 1,
                question: 'What inspires you to keep going?',
                options: [
                    { letter: 'A', text: 'Personal growth and achievement', correct: null },
                    { letter: 'B', text: 'Helping others and making impact', correct: null },
                    { letter: 'C', text: 'Creative expression and exploration', correct: null },
                    { letter: 'D', text: 'Building something meaningful', correct: null }
                ]
            },
            {
                id: 2,
                question: 'How do you handle challenges?',
                options: [
                    { letter: 'A', text: 'I face them head-on with determination', correct: null },
                    { letter: 'B', text: 'I break them into smaller steps', correct: null },
                    { letter: 'C', text: 'I seek support and advice', correct: null },
                    { letter: 'D', text: 'I take time to reflect and plan', correct: null }
                ]
            },
            {
                id: 3,
                question: 'Which personal goal should you focus on next?',
                options: [
                    { letter: 'A', text: 'Academic or career goals', correct: null },
                    { letter: 'B', text: 'Health and wellness goals', correct: null },
                    { letter: 'C', text: 'Creative or hobby goals', correct: null },
                    { letter: 'D', text: 'Social and relationship goals', correct: null }
                ]
            },
            {
                id: 4,
                question: 'Find your study motivation mantra',
                options: [
                    { letter: 'A', text: '\"Progress, not perfection\"', correct: null },
                    { letter: 'B', text: '\"Every step counts\"', correct: null },
                    { letter: 'C', text: '\"I can do hard things\"', correct: null },
                    { letter: 'D', text: '\"Growth happens outside comfort zone\"', correct: null }
                ]
            }
        ]
    },
    // 6. Light & Fun Quizzes (Mood Boosters)
    {
        id: 'study-snack',
        title: '🍎 Which Study Snack Are You?',
        description: 'A fun, light-hearted quiz to boost your mood!',
        icon: '🍎',
        category: 'fun',
        questions: 5,
        timeLimit: 5,
        type: 'emotional',
        questionsList: [
            {
                id: 1,
                question: 'Which study snack are you?',
                options: [
                    { letter: 'A', text: '🍎 Apple - Fresh and reliable', correct: null },
                    { letter: 'B', text: '🍫 Chocolate - Sweet energy boost', correct: null },
                    { letter: 'C', text: '🥜 Nuts - Sustained power', correct: null },
                    { letter: 'D', text: '🍪 Cookies - Comfort and joy', correct: null }
                ]
            },
            {
                id: 2,
                question: 'Find your comfort movie',
                options: [
                    { letter: 'A', text: '🎬 Comedy - I need to laugh', correct: null },
                    { letter: 'B', text: '🎬 Adventure - I want excitement', correct: null },
                    { letter: 'C', text: '🎬 Drama - I enjoy deep stories', correct: null },
                    { letter: 'D', text: '🎬 Fantasy - I love escaping reality', correct: null }
                ]
            },
            {
                id: 3,
                question: 'What color matches your current mood?',
                options: [
                    { letter: 'A', text: '🎨 Yellow - Bright and energetic', correct: null },
                    { letter: 'B', text: '🎨 Blue - Calm and peaceful', correct: null },
                    { letter: 'C', text: '🎨 Green - Balanced and grounded', correct: null },
                    { letter: 'D', text: '🎨 Purple - Creative and thoughtful', correct: null }
                ]
            },
            {
                id: 4,
                question: 'If you were an emoji, which one would you be?',
                options: [
                    { letter: 'A', text: '😄 Happy and cheerful', correct: null },
                    { letter: 'B', text: '😊 Calm and content', correct: null },
                    { letter: 'C', text: '🤔 Thoughtful and curious', correct: null },
                    { letter: 'D', text: '😎 Cool and confident', correct: null }
                ]
            },
            {
                id: 5,
                question: 'What kind of weather describes your mood?',
                options: [
                    { letter: 'A', text: '☀️ Sunny - Bright and positive', correct: null },
                    { letter: 'B', text: '🌧️ Rainy - Reflective and calm', correct: null },
                    { letter: 'C', text: '🌈 Rainbow - Colorful and hopeful', correct: null },
                    { letter: 'D', text: '⛅ Partly cloudy - Balanced', correct: null }
                ]
            }
        ]
    },
    {
        id: 'mood-check',
        title: '😊 Daily Mood Check-in',
        description: 'Quick check-in to see how you\'re feeling today',
        icon: '😊',
        category: 'mood',
        questions: 5,
        timeLimit: 5,
        type: 'emotional',
        questionsList: [
            {
                id: 1,
                question: 'How are you feeling right now?',
                options: [
                    { letter: 'A', text: 'Great! 😊', correct: null },
                    { letter: 'B', text: 'Good 🙂', correct: null },
                    { letter: 'C', text: 'Okay 😐', correct: null },
                    { letter: 'D', text: 'Not great 😟', correct: null }
                ]
            },
            {
                id: 2,
                question: 'How stressed do you feel about your studies?',
                options: [
                    { letter: 'A', text: 'Not stressed at all', correct: null },
                    { letter: 'B', text: 'A little stressed', correct: null },
                    { letter: 'C', text: 'Moderately stressed', correct: null },
                    { letter: 'D', text: 'Very stressed', correct: null }
                ]
            },
            {
                id: 3,
                question: 'Are you getting enough sleep?',
                options: [
                    { letter: 'A', text: 'Yes, I sleep 7-9 hours', correct: null },
                    { letter: 'B', text: 'Sometimes, 5-7 hours', correct: null },
                    { letter: 'C', text: 'Not really, less than 5 hours', correct: null },
                    { letter: 'D', text: 'I have trouble sleeping', correct: null }
                ]
            },
            {
                id: 4,
                question: 'How do you feel about asking for help?',
                options: [
                    { letter: 'A', text: 'I\'m comfortable asking for help', correct: null },
                    { letter: 'B', text: 'I sometimes ask for help', correct: null },
                    { letter: 'C', text: 'I find it difficult', correct: null },
                    { letter: 'D', text: 'I rarely ask for help', correct: null }
                ]
            },
            {
                id: 5,
                question: 'What helps you relax?',
                options: [
                    { letter: 'A', text: 'Exercise or physical activity', correct: null },
                    { letter: 'B', text: 'Listening to music', correct: null },
                    { letter: 'C', text: 'Spending time with friends/family', correct: null },
                    { letter: 'D', text: 'Reading or hobbies', correct: null }
                ]
            }
        ]
    }
];

/**
 * Render emotional quizzes
 */
function renderEmotionalQuizzes() {
    const container = document.getElementById('emotional-quizzes-grid');
    if (!container) return;

    container.innerHTML = '';

    emotionalQuizzes.forEach(quiz => {
        const card = createQuizCard({
            ...quiz,
            course: 'Well-being',
            status: 'pending',
            quizType: 'emotional'
        }, null);
        container.appendChild(card);
    });
}

// ============================================
// Assignments Data
// ============================================

const assignmentsData = [
    {
        id: 1,
        title: 'Python Project: Calculator Application',
        course: 'Introduction to Python',
        courseId: 'python',
        description: 'Create a simple calculator application using Python. Include basic arithmetic operations.',
        dueDate: '2024-12-20',
        status: 'pending',
        maxScore: 100
    },
    {
        id: 2,
        title: 'Web Development: Personal Portfolio',
        course: 'Web Development',
        courseId: 'webdev',
        description: 'Build a responsive personal portfolio website using HTML, CSS, and JavaScript.',
        dueDate: '2024-12-25',
        status: 'submitted',
        maxScore: 150,
        submittedDate: '2024-12-15',
        grade: null
    },
    {
        id: 3,
        title: 'Database Design: ER Diagram',
        course: 'Database Design',
        courseId: 'database',
        description: 'Design an ER diagram for an online bookstore system.',
        dueDate: '2024-12-18',
        status: 'graded',
        maxScore: 100,
        submittedDate: '2024-12-10',
        grade: 92
    },
    {
        id: 4,
        title: 'ML Algorithm Implementation',
        course: 'Machine Learning',
        courseId: 'ml',
        description: 'Implement and compare different ML algorithms on a given dataset.',
        dueDate: '2024-12-30',
        status: 'pending',
        maxScore: 200
    }
];

/**
 * Render assignments
 */
function renderAssignments(filter = 'all') {
    const container = document.getElementById('assignments-container');
    if (!container) return;

    let filteredAssignments = assignmentsData;
    if (filter !== 'all') {
        filteredAssignments = assignmentsData.filter(a => a.status === filter);
    }

    container.innerHTML = '';

    if (filteredAssignments.length === 0) {
        container.innerHTML = '<p class="no-items">No assignments found.</p>';
        return;
    }

    filteredAssignments.forEach(assignment => {
        const card = document.createElement('div');
        card.className = 'assignment-card';

        const statusClass = `status-${assignment.status}`;
        const statusText = assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1);

        card.innerHTML = `
            <div class="assignment-header">
                <div>
                    <h3 class="assignment-title">${assignment.title}</h3>
                    <div class="assignment-meta">
                        <span>📚 ${assignment.course}</span>
                        <span>📅 Due: ${new Date(assignment.dueDate).toLocaleDateString()}</span>
                        <span>💯 Max Score: ${assignment.maxScore}</span>
                    </div>
                </div>
                <span class="assignment-status-badge ${statusClass}">${statusText}</span>
            </div>
            <p class="assignment-description">${assignment.description}</p>
            ${assignment.status === 'graded' && assignment.grade ? `
                <div style="padding: 1rem; background: rgba(40, 167, 69, 0.1); border-radius: 0.5rem; margin-bottom: 1rem;">
                    <strong>Grade: ${assignment.grade}/${assignment.maxScore}</strong>
                </div>
            ` : ''}
            <div class="assignment-actions">
                ${assignment.status === 'pending' ? `
                    <button class="btn btn-primary submit-assignment-btn" data-assignment-id="${assignment.id}">
                        Submit Assignment
                    </button>
                ` : ''}
                ${assignment.status === 'submitted' ? `
                    <button class="btn btn-secondary" disabled>Submitted on ${new Date(assignment.submittedDate).toLocaleDateString()}</button>
                ` : ''}
                ${assignment.status === 'graded' ? `
                    <button class="btn btn-outline view-feedback-btn" data-assignment-id="${assignment.id}">
                        View Feedback
                    </button>
                ` : ''}
            </div>
        `;

        const submitBtn = card.querySelector('.submit-assignment-btn');
        if (submitBtn) {
            submitBtn.addEventListener('click', () => openAssignmentModal(assignment));
        }

        container.appendChild(card);
    });
}

/**
 * Open assignment submission modal
 */
function openAssignmentModal(assignment) {
    const modal = document.getElementById('assignment-modal');
    const details = document.getElementById('assignment-details');
    const fileInput = document.getElementById('assignment-file');
    const submitBtn = document.getElementById('submit-assignment-btn');

    if (!modal || !details) return;

    document.getElementById('assignment-modal-title').textContent = `Submit: ${assignment.title}`;

    details.innerHTML = `
        <h3 style="margin-bottom: 0.5rem;">${assignment.title}</h3>
        <p style="color: var(--text-secondary); margin-bottom: 1rem;">${assignment.course}</p>
        <p>${assignment.description}</p>
        <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--border-light);">
            <strong>Due Date:</strong> ${new Date(assignment.dueDate).toLocaleDateString()}<br>
            <strong>Max Score:</strong> ${assignment.maxScore} points
        </div>
    `;

    // Reset file input
    if (fileInput) {
        fileInput.value = '';
        updateFilePreview();
    }

    // File input handler
    if (fileInput) {
        fileInput.addEventListener('change', updateFilePreview);
    }

    // Submit handler
    if (submitBtn) {
        submitBtn.onclick = () => submitAssignment(assignment.id);
        submitBtn.disabled = true;
    }

    openModal(modal);
}

/**
 * Update file preview
 */
function updateFilePreview() {
    const fileInput = document.getElementById('assignment-file');
    const preview = document.getElementById('file-preview');
    const submitBtn = document.getElementById('submit-assignment-btn');

    if (!fileInput || !preview) return;

    if (fileInput.files && fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const fileSize = (file.size / 1024 / 1024).toFixed(2); // MB

        preview.innerHTML = `
            <div class="file-preview-item">
                <div>
                    <div class="file-preview-name">${file.name}</div>
                    <div class="file-preview-size">${fileSize} MB</div>
                </div>
                <button class="file-preview-remove" onclick="document.getElementById('assignment-file').value=''; updateFilePreview();">Remove</button>
            </div>
        `;
        preview.classList.add('has-file');
        if (submitBtn) submitBtn.disabled = false;
    } else {
        preview.classList.remove('has-file');
        if (submitBtn) submitBtn.disabled = true;
    }
}

/**
 * Submit assignment
 */
function submitAssignment(assignmentId) {
    const fileInput = document.getElementById('assignment-file');
    if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
        alert('Please select a file to upload.');
        return;
    }

    // In a real app, this would upload to server
    alert('Assignment submitted successfully!');
    
    // Update assignment status
    const assignment = assignmentsData.find(a => a.id === assignmentId);
    if (assignment) {
        assignment.status = 'submitted';
        assignment.submittedDate = new Date().toISOString().split('T')[0];
    }

    closeModal(document.getElementById('assignment-modal'));
    renderAssignments();
}

// ============================================
// Grades and Results
// ============================================

const quizResults = [
    { id: 1, quizTitle: 'Python Basics Quiz', course: 'Introduction to Python', score: 85, maxScore: 100, date: '2024-12-10' },
    { id: 2, quizTitle: 'Python Functions & Modules', course: 'Introduction to Python', score: 92, maxScore: 100, date: '2024-12-05' },
    { id: 4, quizTitle: 'JavaScript Basics', course: 'Web Development', score: 78, maxScore: 100, date: '2024-12-08' },
    { id: 3, quizTitle: 'HTML & CSS Fundamentals', course: 'Web Development', score: 88, maxScore: 100, date: '2024-12-12' }
];

/**
 * Render grades overview
 */
function renderGradesOverview() {
    if (quizResults.length === 0) return;

    const total = quizResults.length;
    const avgScore = Math.round(quizResults.reduce((sum, r) => sum + (r.score / r.maxScore * 100), 0) / total);
    const bestScore = Math.max(...quizResults.map(r => Math.round(r.score / r.maxScore * 100)));

    const avgEl = document.getElementById('avg-grade');
    const completedEl = document.getElementById('completed-quizzes');
    const bestEl = document.getElementById('best-grade');

    if (avgEl) avgEl.textContent = `${avgScore}%`;
    if (completedEl) completedEl.textContent = total;
    if (bestEl) bestEl.textContent = `${bestScore}%`;
}

/**
 * Render quiz results list
 */
function renderQuizResults() {
    const container = document.getElementById('quiz-results-list');
    if (!container) return;

    container.innerHTML = '';

    quizResults.forEach(result => {
        const item = document.createElement('div');
        item.className = 'quiz-result-item';

        const percentage = Math.round((result.score / result.maxScore) * 100);

        item.innerHTML = `
            <div class="quiz-result-header">
                <div>
                    <h3 class="quiz-result-title">${result.quizTitle}</h3>
                    <div class="quiz-result-meta">
                        <span>📚 ${result.course}</span>
                        <span>📅 ${new Date(result.date).toLocaleDateString()}</span>
                        <span>Max Score: ${result.maxScore}</span>
                    </div>
                </div>
                <div class="quiz-result-score">${percentage}%</div>
            </div>
            <div style="margin-top: 1rem;">
                <strong>Score:</strong> ${result.score}/${result.maxScore} points
            </div>
        `;

        item.addEventListener('click', () => {
            // Show detailed results (could open modal with full breakdown)
            showQuizResults({ ...result, title: result.quizTitle }, {
                score: result.score,
                total: result.maxScore,
                percentage: percentage
            });
        });

        container.appendChild(item);
    });
}

// ============================================
// Messages from Admin
// ============================================

const messagesData = [
    {
        id: 1,
        sender: 'Dr. Sarah Johnson',
        subject: 'Important: Final Exam Schedule',
        content: 'Dear students, please note that the final exam schedule has been posted. Make sure to check your exam dates and prepare accordingly.',
        date: '2024-12-15',
        read: false
    },
    {
        id: 2,
        sender: 'Prof. Michael Brown',
        subject: 'Assignment Extension',
        content: 'Due to popular request, the deadline for the Database Design assignment has been extended to December 25th.',
        date: '2024-12-14',
        read: false
    },
    {
        id: 3,
        sender: 'Admin Team',
        subject: 'Welcome Back!',
        content: 'Welcome to the new semester! We hope you\'re excited to continue your learning journey.',
        date: '2024-12-01',
        read: true
    }
];

/**
 * Render messages
 */
function renderMessages() {
    const container = document.getElementById('messages-container');
    if (!container) return;

    // Reload messages first
    loadStudentMessages();

    container.innerHTML = '';

    // Sort messages by date (newest first)
    const sortedMessages = [...messagesData].sort((a, b) => 
        new Date(b.date) - new Date(a.date)
    );

    // Update notification badge
    const unreadCount = sortedMessages.filter(m => !m.read).length;
    const badgeEl = document.getElementById('notification-count');
    if (badgeEl) badgeEl.textContent = unreadCount;

    if (sortedMessages.length === 0) {
        container.innerHTML = '<p class="no-items">No messages.</p>';
        return;
    }

    sortedMessages.forEach(message => {
        const card = document.createElement('div');
        card.className = `message-card ${!message.read ? 'unread' : ''}`;

        card.innerHTML = `
            <div class="message-header">
                <div>
                    <div class="message-sender">${message.sender}</div>
                    <div class="message-date">${new Date(message.date).toLocaleDateString()}</div>
                </div>
            </div>
            <h3 class="message-subject">${message.subject}</h3>
            <p class="message-content">${message.content}</p>
        `;

        card.addEventListener('click', () => {
            message.read = true;
            // Save updated read status
            const user = getCurrentUser();
            if (user && user.userType === 'student') {
                let allMessages = JSON.parse(localStorage.getItem('lms_messages') || '{}');
                if (allMessages[user.username]) {
                    const msgIndex = allMessages[user.username].findIndex(m => m.id === message.id);
                    if (msgIndex >= 0) {
                        allMessages[user.username][msgIndex].read = true;
                        localStorage.setItem('lms_messages', JSON.stringify(allMessages));
                    }
                }
            }
            renderMessages();
        });

        container.appendChild(card);
    });
}

// ============================================
// Attendance Rendering
// ============================================

/**
 * Render attendance section
 */
function renderAttendance() {
    const container = document.getElementById('attendance-container');
    if (!container) return;

    const user = getCurrentUser();
    if (!user || user.userType !== 'student') return;

    container.innerHTML = '';

    // Load attendance from localStorage
    const allAttendance = JSON.parse(localStorage.getItem('lms_attendance') || '{}');

    coursesData.forEach(course => {
        // Calculate attendance from saved data
        let attended = 0;
        let total = 0;
        
        if (allAttendance[course.id]) {
            Object.keys(allAttendance[course.id]).forEach(date => {
                const dayAttendance = allAttendance[course.id][date];
                if (dayAttendance[user.username]) {
                    total++;
                    if (dayAttendance[user.username] === 'present') {
                        attended++;
                    }
                }
            });
        }
        
        // If no attendance data, use default
        if (total === 0) {
            attended = course.classesAttended;
            total = course.totalClasses;
        }

        const attendancePercentage = total > 0 ? Math.round((attended / total) * 100) : 0;

        const card = document.createElement('div');
        card.className = 'attendance-course-card';

        card.innerHTML = `
            <div class="attendance-course-header">
                <h3 class="attendance-course-title">${course.title} (${course.code})</h3>
            </div>
            <div class="attendance-overall">
                <div class="attendance-percentage-large">${attendancePercentage}%</div>
                <div class="attendance-label">Overall Attendance</div>
            </div>
            <div class="attendance-stats">
                <div class="attendance-stat">
                    <div class="attendance-stat-value">${attended}</div>
                    <div class="attendance-stat-label">Classes Attended</div>
                </div>
                <div class="attendance-stat">
                    <div class="attendance-stat-value">${total - attended}</div>
                    <div class="attendance-stat-label">Classes Missed</div>
                </div>
                <div class="attendance-stat">
                    <div class="attendance-stat-value">${total}</div>
                    <div class="attendance-stat-label">Total Classes</div>
                </div>
            </div>
        `;

        container.appendChild(card);
    });
}

// ============================================
// Explore Courses
// ============================================

const availableCourses = [
    { id: 'java', title: 'Java Programming', code: 'CS103', icon: '☕', description: 'Learn Java programming from basics to advanced concepts including OOP, collections, and multithreading.' },
    { id: 'cybersecurity', title: 'Cybersecurity Fundamentals', code: 'CS202', icon: '🔒', description: 'Introduction to cybersecurity principles, network security, encryption, and threat detection.' },
    { id: 'ai', title: 'Artificial Intelligence', code: 'CS302', icon: '🧠', description: 'Explore AI concepts, algorithms, natural language processing, and intelligent systems.' },
    { id: 'cloud', title: 'Cloud Computing', code: 'CS203', icon: '☁️', description: 'Learn cloud architecture, AWS, Azure, and cloud deployment strategies.' },
    { id: 'data-science', title: 'Data Science & Analytics', code: 'CS303', icon: '📊', description: 'Master data analysis, visualization, statistical methods, and data-driven decision making.' }
];

/**
 * Render available courses for exploration
 */
function renderAvailableCourses() {
    const container = document.getElementById('available-courses-list');
    if (!container) return;

    container.innerHTML = '';

    availableCourses.forEach(course => {
        const card = document.createElement('article');
        card.className = `course-card course-python`; // Using default styling

        card.innerHTML = `
            <div class="course-header">
                <div class="course-icon">${course.icon}</div>
                <div class="course-info">
                    <h3 class="course-title">${course.title}</h3>
                    <span class="course-code">${course.code}</span>
                </div>
            </div>
            <p class="course-description">${course.description}</p>
            <div class="course-footer">
                <button class="btn-course btn-primary enroll-course-btn" data-course-id="${course.id}">
                    Enroll Now
                </button>
            </div>
        `;

        const enrollBtn = card.querySelector('.enroll-course-btn');
        if (enrollBtn) {
            enrollBtn.addEventListener('click', () => {
                if (confirm(`Enroll in ${course.title}?`)) {
                    alert('Enrollment successful! The course will appear in "My Courses" soon.');
                }
            });
        }

        container.appendChild(card);
    });
}

// ============================================
// Enhanced Navigation and Section Switching
// ============================================

/**
 * Enhanced switch section function
 */
function switchSection(section) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(sec => {
        sec.classList.remove('active');
    });

    // Show target section
    let targetSection;
    switch(section) {
        case 'dashboard':
            targetSection = document.getElementById('dashboard-section');
            switchPage('dashboard');
            break;
        case 'courses':
            targetSection = document.getElementById('courses-section');
            switchPage('courses');
            renderCoursesWithAttendance('courses-list');
            break;
        case 'assignments':
            targetSection = document.getElementById('assignments-section');
            switchPage('assignments');
            renderAssignments();
            break;
        case 'quizzes':
            targetSection = document.getElementById('quizzes-section');
            switchPage('quizzes');
            break;
        case 'grades':
            targetSection = document.getElementById('grades-section');
            switchPage('grades');
            renderGradesOverview();
            renderQuizResults();
            break;
        case 'messages':
            targetSection = document.getElementById('messages-section');
            switchPage('messages');
            loadStudentMessages();
            renderMessages();
            break;
        case 'attendance':
            targetSection = document.getElementById('attendance-section');
            switchPage('attendance');
            renderAttendance();
            break;
        case 'profile':
            targetSection = document.getElementById('profile-section');
            switchPage('profile');
            renderProfile();
            break;
    }

    if (targetSection) {
        targetSection.classList.add('active');
    }

    // Update active menu
    document.querySelectorAll('.menu-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === section) {
            link.classList.add('active');
        }
    });
}

/**
 * Render profile information
 */
function renderProfile() {
    const user = getCurrentUser();
    if (!user) return;

    const nameEl = document.getElementById('profile-name');
    const emailEl = document.getElementById('profile-email');
    const avatarEl = document.getElementById('profile-avatar-large');
    const idEl = document.getElementById('profile-id');
    const coursesEl = document.getElementById('profile-courses');
    const progressEl = document.getElementById('profile-progress');

    if (nameEl) nameEl.textContent = user.name || 'Student';
    if (emailEl) emailEl.textContent = user.email || 'email@student.edu';
    if (avatarEl) {
        const initials = user.name ? user.name.split(' ').map(n => n[0]).join('').toUpperCase() : 'ST';
        avatarEl.textContent = initials.substring(0, 2);
    }
    if (idEl) idEl.textContent = user.username || 'STU001';
    if (coursesEl) coursesEl.textContent = coursesData.length;
    if (progressEl) {
        const avgProgress = Math.round(coursesData.reduce((sum, c) => sum + c.progress, 0) / coursesData.length);
        progressEl.textContent = `${avgProgress}%`;
    }
}

// ============================================
// Quiz Type Switching
// ============================================

/**
 * Render skill-based quizzes
 */
function renderSkillBasedQuizzes() {
    const container = document.getElementById('skill-based-quizzes-grid');
    if (!container) return;
    
    container.innerHTML = '';
    
    const skillQuizzes = quizData['skill-based'] || [];
    
    if (skillQuizzes.length === 0) {
        container.innerHTML = '<p class="no-quizzes">No skill-based quizzes available.</p>';
        return;
    }
    
    skillQuizzes.forEach(quiz => {
        container.appendChild(createQuizCard(quiz));
    });
}

/**
 * Render career & professional development quizzes
 */
function renderCareerQuizzes() {
    const container = document.getElementById('career-quizzes-grid');
    if (!container) return;
    
    container.innerHTML = '';
    
    const careerQuizzes = quizData['career'] || [];
    
    if (careerQuizzes.length === 0) {
        container.innerHTML = '<p class="no-quizzes">No career development quizzes available.</p>';
        return;
    }
    
    careerQuizzes.forEach(quiz => {
        container.appendChild(createQuizCard(quiz));
    });
}

/**
 * Render challenge mode / weekly trivia quizzes
 */
function renderChallengeQuizzes() {
    const container = document.getElementById('challenge-quizzes-grid');
    if (!container) return;
    
    container.innerHTML = '';
    
    const challengeQuizzes = quizData['challenge'] || [];
    
    if (challengeQuizzes.length === 0) {
        container.innerHTML = '<p class="no-quizzes">No challenge quizzes available this week.</p>';
        return;
    }
    
    challengeQuizzes.forEach(quiz => {
        container.appendChild(createQuizCard(quiz));
    });
}

/**
 * Change theme based on quiz type
 */
function changeTheme(themeName) {
    const body = document.body;
    const indicator = document.getElementById('theme-indicator');
    
    // Remove previous theme
    body.removeAttribute('data-theme');
    
    // Apply new theme
    body.setAttribute('data-theme', themeName);
    
    // Show theme indicator
    if (indicator) {
        indicator.classList.add('show');
        setTimeout(() => {
            indicator.classList.remove('show');
        }, 2000);
    }
    
    // Add floating emojis for fun/wellbeing themes
    if (themeName === 'fun' || themeName === 'wellbeing') {
        const emojis = themeName === 'fun' ? ['🎉', '🌟', '💫', '🎨'] : ['💚', '🪷', '🌿', '✨'];
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                createFloatingEmoji(emojis[Math.floor(Math.random() * emojis.length)]);
            }, i * 200);
        }
    }
}

/**
 * Create floating emoji animation
 */
function createFloatingEmoji(emoji) {
    const emojiEl = document.createElement('div');
    emojiEl.className = 'theme-emoji';
    emojiEl.textContent = emoji;
    emojiEl.style.left = Math.random() * 80 + 10 + '%';
    emojiEl.style.top = '50%';
    document.body.appendChild(emojiEl);
    
    setTimeout(() => {
        emojiEl.remove();
    }, 3000);
}

/**
 * Initialize quiz type tabs
 */
function initQuizTypeTabs() {
    const tabs = document.querySelectorAll('.quiz-type-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Update active tab
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Get theme and quiz type
            const quizType = tab.getAttribute('data-quiz-type');
            const theme = tab.getAttribute('data-theme');
            
            // Change theme
            if (theme) {
                changeTheme(theme);
            }

            // Show/hide content
            document.querySelectorAll('.quiz-type-content').forEach(content => {
                content.classList.remove('active');
            });

            if (quizType === 'emotional') {
                document.getElementById('emotional-quizzes').classList.add('active');
                renderEmotionalQuizzes();
            } else if (quizType === 'academic') {
                document.getElementById('academic-quizzes').classList.add('active');
                renderAllQuizzes();
            } else if (quizType === 'skill-based') {
                document.getElementById('skill-based-quizzes').classList.add('active');
                renderSkillBasedQuizzes();
            } else if (quizType === 'career') {
                document.getElementById('career-quizzes').classList.add('active');
                renderCareerQuizzes();
            } else if (quizType === 'challenge') {
                document.getElementById('challenge-quizzes').classList.add('active');
                renderChallengeQuizzes();
            }
        });
    });
    
    // Set initial theme based on active tab
    const activeTab = document.querySelector('.quiz-type-tab.active');
    if (activeTab) {
        const initialTheme = activeTab.getAttribute('data-theme');
        if (initialTheme) {
            changeTheme(initialTheme);
        }
    }
}

// ============================================
// Assignment Filter Tabs
// ============================================

/**
 * Initialize assignment filters
 */
function initAssignmentFilters() {
    const tabs = document.querySelectorAll('.assignment-filter-tabs .filter-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const filter = tab.getAttribute('data-filter');
            renderAssignments(filter);
        });
    });
}

// ============================================
// Emotional Quiz Insights & Feedback
// ============================================

/**
 * Show personalized insights for emotional quizzes (no scores)
 */
function showEmotionalQuizInsights(quiz) {
    const modal = document.getElementById('results-modal');
    if (!modal) return;

    // Generate insights based on quiz category and answers
    const insights = generateEmotionalInsights(quiz);
    
    // Update modal content
    const modalTitle = document.getElementById('results-modal-title');
    const modalBody = document.querySelector('#results-modal .modal-body');
    
    if (modalTitle) {
        modalTitle.textContent = `${quiz.icon} ${quiz.title} - Your Insights`;
    }
    
    if (modalBody) {
        modalBody.innerHTML = `
            <div class="results-summary" style="text-align: center; padding: 2rem;">
                <div style="font-size: 4rem; margin-bottom: 1rem;">${insights.emoji}</div>
                <h3 style="color: var(--primary-blue); margin-bottom: 1rem; font-size: 1.5rem;">
                    ${insights.title}
                </h3>
                <p style="font-size: 1.1rem; line-height: 1.8; color: var(--text-primary); margin-bottom: 2rem;">
                    ${insights.message}
                </p>
                
                ${insights.tips ? `
                    <div style="background: rgba(15, 76, 117, 0.1); padding: 1.5rem; border-radius: var(--radius-md); margin-top: 2rem;">
                        <h4 style="color: var(--primary-blue); margin-bottom: 1rem;">💡 Suggestions for You:</h4>
                        <ul style="text-align: left; padding-left: 1.5rem; line-height: 2;">
                            ${insights.tips.map(tip => `<li style="margin-bottom: 0.5rem;">${tip}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}
                
                ${insights.activity ? `
                    <div style="background: rgba(40, 167, 69, 0.1); padding: 1.5rem; border-radius: var(--radius-md); margin-top: 1.5rem;">
                        <h4 style="color: var(--success-green); margin-bottom: 1rem;">🎯 Try This Activity:</h4>
                        <p style="font-size: 1rem; line-height: 1.8;">${insights.activity}</p>
                    </div>
                ` : ''}
                
                ${insights.quote ? `
                    <div style="background: rgba(255, 193, 7, 0.1); padding: 1.5rem; border-radius: var(--radius-md); margin-top: 1.5rem; font-style: italic;">
                        <p style="font-size: 1.1rem; line-height: 1.8; color: var(--text-primary);">
                            "${insights.quote}"
                        </p>
                    </div>
                ` : ''}
            </div>
        `;
    }
    
    // Update footer buttons
    const footer = modal.querySelector('.modal-footer');
    if (footer) {
        footer.innerHTML = `
            <button class="btn btn-primary" id="close-insights-btn">Close</button>
        `;
        
        const closeBtn = document.getElementById('close-insights-btn');
        if (closeBtn) {
            closeBtn.onclick = () => closeModal(modal);
        }
    }
    
    openModal(modal);
}

/**
 * Generate personalized insights based on quiz category and answers
 */
function generateEmotionalInsights(quiz) {
    const category = quiz.category || 'mood';
    const insights = {
        emoji: quiz.icon || '💚',
        title: '',
        message: '',
        tips: [],
        activity: '',
        quote: ''
    };
    
    // Generate insights based on category
    switch(category) {
        case 'self-awareness':
            insights.title = 'Self-Awareness Insights';
            insights.message = 'You recharge through creativity. Try journaling or drawing this week. Understanding your stress response style helps you manage challenges better.';
            insights.tips = [
                'Keep a daily reflection journal',
                'Practice mindfulness exercises',
                'Identify your learning style preferences',
                'Set personal growth goals'
            ];
            insights.activity = 'Draw something that represents your week or write a short positive story about yourself.';
            insights.quote = 'Self-awareness is the first step to personal growth.';
            break;
            
        case 'stress-management':
            insights.title = 'Stress Management Tips';
            insights.message = 'Taking mindful breaks helps you maintain balance. Here are some techniques that work well for your style.';
            insights.tips = [
                'Take a 5-minute breathing break when you feel overwhelmed',
                'Try 10-minute guided meditation',
                'Go for a short walk or stretch',
                'Practice deep breathing exercises'
            ];
            insights.activity = 'Do a 3-minute deep breathing session. Focus on your breath and let tension release.';
            insights.quote = 'Calm mind brings inner strength and self-confidence.';
            break;
            
        case 'positivity':
            insights.title = 'Positivity & Gratitude';
            insights.message = 'You have a growth mindset! Keep spreading positivity 🌻. Cultivating gratitude can transform your perspective.';
            insights.tips = [
                'Write one thing you\'re thankful for each day',
                'Start a "good news of the week" journal',
                'Send a kind message to someone who made you smile',
                'Practice daily affirmations'
            ];
            insights.activity = 'Write down three things you\'re grateful for today.';
            insights.quote = 'Gratitude turns what we have into enough.';
            break;
            
        case 'creativity':
            insights.title = 'Creative Expression';
            insights.message = 'Creative activities help you relax and recharge. Discover hobbies that match your artistic personality!';
            insights.tips = [
                'Make a playlist that lifts your mood',
                'Try a new creative hobby this week',
                'Spend time in nature or outdoors',
                'Join a creative workshop or class'
            ];
            insights.activity = 'Draw something that represents your week or create a mood-boosting playlist.';
            insights.quote = 'Creativity is intelligence having fun.';
            break;
            
        case 'social':
            insights.title = 'Social Connection';
            insights.message = 'You value meaningful connections. Your communication style helps build strong relationships.';
            insights.tips = [
                'Send a kind message to a classmate today',
                'Practice active listening in conversations',
                'Start a "good news of the week" post',
                'Offer support to friends when they need it'
            ];
            insights.activity = 'Send a message to someone who made you smile recently.';
            insights.quote = 'Connection is the energy that exists between people.';
            break;
            
        case 'motivation':
            insights.title = 'Motivation & Goals';
            insights.message = 'You inspire yourself through growth and achievement. Here\'s your personalized motivation approach.';
            insights.tips = [
                'Set a "Goal of the Week" card',
                'Break big goals into smaller steps',
                'Celebrate small wins',
                'Find your study motivation mantra'
            ];
            insights.activity = 'Create a custom "Goal of the Week" card and place it where you\'ll see it daily.';
            insights.quote = 'Progress, not perfection, is the key to success.';
            break;
            
        case 'fun':
            insights.title = 'Fun & Mood Boost';
            insights.message = 'Light-hearted activities reduce stress and boost your mood. Keep having fun! 🎉';
            insights.tips = [
                'Watch your comfort movie',
                'Try a new study snack',
                'Listen to calming nature sounds',
                'Take a mindful break and stretch'
            ];
            insights.activity = 'Take a mindful sip of your drink — notice the taste and warmth.';
            insights.quote = 'Laughter is the best medicine.';
            break;
            
        default:
            insights.title = 'Mood Check-in Results';
            insights.message = 'Thank you for checking in with yourself. Self-awareness is an important part of well-being.';
            insights.tips = [
                'Take regular breaks during study sessions',
                'Get 7-9 hours of sleep each night',
                'Don\'t hesitate to ask for help when needed',
                'Find activities that help you relax'
            ];
            insights.activity = 'Look away from your screen and stretch your neck. Take a moment to breathe.';
            insights.quote = 'Taking care of yourself is not selfish — it\'s essential.';
    }
    
    return insights;
}

/**
 * Show feedback modal after emotional quiz
 */
function showFeedbackModal() {
    const modal = document.getElementById('feedback-modal');
    if (!modal) return;

    const options = document.querySelectorAll('.feedback-option');
    const submitBtn = document.getElementById('submit-feedback-btn');
    const skipBtn = document.getElementById('skip-feedback-btn');
    let selectedFeeling = null;

    options.forEach(option => {
        option.addEventListener('click', () => {
            options.forEach(o => o.classList.remove('selected'));
            option.classList.add('selected');
            selectedFeeling = option.getAttribute('data-feeling');
        });
    });

    if (submitBtn) {
        submitBtn.onclick = () => {
            const comment = document.getElementById('feedback-textarea').value;
            // In real app, send to server
            console.log('Feedback submitted:', { feeling: selectedFeeling, comment });
            alert('Thank you for your feedback!');
            closeModal(modal);
        };
    }

    if (skipBtn) {
        skipBtn.onclick = () => closeModal(modal);
    }

    openModal(modal);
}


// ============================================
// Enhanced Initialization
// ============================================

/**
 * Initialize the application
 */
function init() {
    // Load quiz data from localStorage (for scheduled quizzes)
    loadQuizDataFromStorage();

    // Check if student dashboard
    if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
        const user = getCurrentUser();
        if (!user || user.userType !== 'student') {
            window.location.href = 'login.html';
            return;
        }

        updateUserDisplay();
        setupLogout();
        showMotivationalQuote();
        renderCoursesWithAttendance();
        renderCoursesWithAttendance('courses-list');
        initQuizTypeTabs();
        renderEmotionalQuizzes();
        initAssignmentFilters();
        renderAssignments();
        renderGradesOverview();
        renderQuizResults();
        loadStudentMessages();
        renderMessages();
        renderAttendance();
        renderAvailableCourses();
        renderProfile();
    }

    initNavigation();
    initQuizFilters();
    initEventListeners();
    renderAllQuizzes();
    
    // Set default active section
    switchPage('dashboard');

    // Explore courses button
    const exploreBtn = document.getElementById('explore-courses-btn');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', () => {
            const exploreSection = document.getElementById('explore-courses-section');
            if (exploreSection) {
                exploreSection.style.display = exploreSection.style.display === 'none' ? 'block' : 'none';
                if (exploreSection.style.display === 'block') {
                    renderAvailableCourses();
                }
            }
        });
    }
}

/**
 * Load quiz data from localStorage
 */
function loadQuizDataFromStorage() {
    const savedQuizData = localStorage.getItem('lms_quizData');
    if (savedQuizData) {
        try {
            const parsed = JSON.parse(savedQuizData);
            // Merge with existing quizData
            Object.keys(parsed).forEach(courseId => {
                if (quizData[courseId]) {
                    // Add new quizzes that don't exist
                    parsed[courseId].forEach(newQuiz => {
                        const exists = quizData[courseId].some(q => q.id === newQuiz.id);
                        if (!exists) {
                            quizData[courseId].push(newQuiz);
                        } else {
                            // Update existing quiz if needed
                            const index = quizData[courseId].findIndex(q => q.id === newQuiz.id);
                            if (index >= 0) {
                                quizData[courseId][index] = { ...quizData[courseId][index], ...newQuiz };
                            }
                        }
                    });
                } else {
                    quizData[courseId] = parsed[courseId];
                }
            });
        } catch (e) {
            console.error('Error loading quiz data:', e);
        }
    }
}

// Start the application when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// ============================================
// Admin Functions
// ============================================

/**
 * Initialize admin-specific functionality
 */
function initAdminFunctions() {
    if (!window.location.pathname.includes('admin.html')) return;

    // Initialize quiz scheduling
    initQuizScheduling();
    
    // Initialize attendance marking
    initAttendanceMarking();
    
    // Initialize admin messaging
    initAdminMessaging();
    
    // Load admin dashboard data
    loadAdminDashboard();
}

/**
 * Initialize quiz scheduling form
 */
// Questions array for current quiz being created
let currentQuizQuestions = [];
let currentEditingQuestionIndex = null;

function initQuizScheduling() {
    const form = document.getElementById('schedule-quiz-form');
    const scheduleNewBtn = document.getElementById('schedule-new-quiz-btn');
    const cancelFormBtn = document.getElementById('cancel-quiz-form-btn');
    const scheduleTypeSelect = document.getElementById('schedule-type');
    const viewCalendarBtn = document.getElementById('view-calendar-btn');
    const filterStatus = document.getElementById('filter-status');
    const addQuestionBtn = document.getElementById('add-question-btn');
    
    // Show/hide form
    if (scheduleNewBtn) {
        scheduleNewBtn.addEventListener('click', () => {
            const formContainer = document.getElementById('quiz-creation-form-container');
            if (formContainer) {
                formContainer.style.display = formContainer.style.display === 'none' ? 'block' : 'none';
                // Reset questions when opening form
                if (formContainer.style.display === 'block') {
                    currentQuizQuestions = [];
                    renderQuestionsList();
                }
            }
        });
    }

    if (cancelFormBtn) {
        cancelFormBtn.addEventListener('click', () => {
            const formContainer = document.getElementById('quiz-creation-form-container');
            if (formContainer) {
                formContainer.style.display = 'none';
                if (form) form.reset();
                hideAllScheduleOptions();
                currentQuizQuestions = [];
                renderQuestionsList();
            }
        });
    }

    // Add question button
    if (addQuestionBtn) {
        addQuestionBtn.addEventListener('click', () => {
            openQuestionEditor();
        });
    }

    // Initialize question editor
    initQuestionEditor();

    // Handle schedule type changes
    if (scheduleTypeSelect) {
        scheduleTypeSelect.addEventListener('change', (e) => {
            const scheduleType = e.target.value;
            handleScheduleTypeChange(scheduleType);
        });
    }

    // Handle progressive unlock type changes
    const progressiveUnlock = document.getElementById('progressive-unlock');
    if (progressiveUnlock) {
        progressiveUnlock.addEventListener('change', (e) => {
            const unlockType = e.target.value;
            const daysInput = document.getElementById('progressive-days-input');
            const dateInput = document.getElementById('progressive-date-input');
            
            if (daysInput) daysInput.style.display = unlockType === 'days' ? 'block' : 'none';
            if (dateInput) dateInput.style.display = unlockType === 'date' ? 'block' : 'none';
        });
    }

    // Calendar view toggle
    if (viewCalendarBtn) {
        viewCalendarBtn.addEventListener('click', () => {
            toggleCalendarView();
        });
    }

    // Filter status
    if (filterStatus) {
        filterStatus.addEventListener('change', (e) => {
            renderScheduledQuizzesTable(e.target.value);
        });
    }

    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get all form values
        const course = document.getElementById('quiz-course').value;
        const title = document.getElementById('quiz-title').value;
        const subject = document.getElementById('quiz-subject').value;
        const description = document.getElementById('quiz-description').value;
        const difficulty = document.getElementById('quiz-difficulty').value;
        const marks = parseInt(document.getElementById('quiz-marks')?.value || 100);
        const questions = parseInt(document.getElementById('quiz-questions').value);
        const timeLimit = parseInt(document.getElementById('quiz-time').value);
        const randomOrder = document.getElementById('quiz-random-order')?.checked || false;
        const negativeMarking = document.getElementById('quiz-negative-marking')?.checked || false;
        const multipleAttempts = document.getElementById('quiz-multiple-attempts')?.checked || false;
        const scheduleType = document.getElementById('schedule-type').value;

        if (!course || !title || !scheduleType) {
            alert('Please fill in all required fields');
            return;
        }

        // Validate questions
        if (currentQuizQuestions.length === 0) {
            if (!confirm('No questions have been added. Do you want to schedule the quiz without questions? Students will see a message that questions are being added.')) {
                return;
            }
        } else if (currentQuizQuestions.length !== questions) {
            if (!confirm(`You specified ${questions} questions but added ${currentQuizQuestions.length}. Do you want to continue?`)) {
                return;
            }
        }

        // Get scheduling data based on type
        const scheduleData = getScheduleData(scheduleType);

        // Create new quiz
        scheduleNewQuiz({
            courseId: course,
            title,
            subject,
            description,
            difficulty,
            marks,
            questions,
            timeLimit,
            randomOrder,
            negativeMarking,
            multipleAttempts,
            scheduleType,
            scheduleData,
            questionsList: currentQuizQuestions
        });
        
        // Reset form and hide
        form.reset();
        hideAllScheduleOptions();
        currentQuizQuestions = [];
        renderQuestionsList();
        const formContainer = document.getElementById('quiz-creation-form-container');
        if (formContainer) formContainer.style.display = 'none';
        
        // Show success message
        alert('Quiz scheduled successfully! It will appear in the student dashboard.');
    });

    // Render scheduled quizzes
    renderScheduledQuizzesTable('all');
}

/**
 * Initialize question editor modal
 */
function initQuestionEditor() {
    const questionTypeSelect = document.getElementById('question-type-select');
    const addOptionBtn = document.getElementById('add-option-btn');
    const saveQuestionBtn = document.getElementById('save-question-btn');
    const cancelQuestionBtn = document.getElementById('cancel-question-btn');
    const closeQuestionModal = document.getElementById('close-question-modal');
    const modal = document.getElementById('question-editor-modal');
    const overlay = document.getElementById('question-modal-overlay');

    // Handle question type change
    if (questionTypeSelect) {
        questionTypeSelect.addEventListener('change', (e) => {
            const questionType = e.target.value;
            hideAllQuestionSections();
            
            if (questionType === 'mcq') {
                document.getElementById('mcq-options-section').style.display = 'block';
                // Initialize with at least 2 options
                if (document.getElementById('mcq-options-list').children.length === 0) {
                    addMCQOption();
                    addMCQOption();
                }
            } else if (questionType === 'fill-in-the-blank') {
                document.getElementById('fill-blank-options-section').style.display = 'block';
            } else if (questionType === 'short-answer') {
                document.getElementById('short-answer-options-section').style.display = 'block';
            }
        });
    }

    // Add MCQ option
    if (addOptionBtn) {
        addOptionBtn.addEventListener('click', () => {
            addMCQOption();
        });
    }

    // Save question
    if (saveQuestionBtn) {
        saveQuestionBtn.addEventListener('click', () => {
            saveQuestion();
        });
    }

    // Cancel/Close question editor
    if (cancelQuestionBtn) {
        cancelQuestionBtn.addEventListener('click', () => {
            closeQuestionEditor();
        });
    }
    
    if (closeQuestionModal) {
        closeQuestionModal.addEventListener('click', () => {
            closeQuestionEditor();
        });
    }
    
    if (overlay) {
        overlay.addEventListener('click', () => {
            closeQuestionEditor();
        });
    }
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const modal = document.getElementById('question-editor-modal');
            if (modal && modal.style.display === 'block') {
                closeQuestionEditor();
            }
        }
    });
}

/**
 * Hide all question type sections
 */
function hideAllQuestionSections() {
    const sections = ['mcq-options-section', 'fill-blank-options-section', 'short-answer-options-section'];
    sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'none';
    });
}

/**
 * Add MCQ option
 */
function addMCQOption() {
    const optionsList = document.getElementById('mcq-options-list');
    if (!optionsList) return;

    const optionCount = optionsList.children.length;
    const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
    const letter = letters[optionCount] || String.fromCharCode(65 + optionCount);

    const optionDiv = document.createElement('div');
    optionDiv.style.display = 'flex';
    optionDiv.style.alignItems = 'center';
    optionDiv.style.gap = '0.5rem';
    optionDiv.style.marginBottom = '0.5rem';
    optionDiv.style.padding = '0.75rem';
    optionDiv.style.background = 'var(--bg-secondary)';
    optionDiv.style.borderRadius = 'var(--radius-md)';

    optionDiv.innerHTML = `
        <span style="font-weight: 600; color: var(--primary-blue); min-width: 1.5rem;">${letter})</span>
        <input type="text" class="form-input mcq-option-input" placeholder="Enter option text" style="flex: 1;">
        <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
            <input type="radio" name="correct-option" value="${letter}" class="correct-option-radio">
            <span style="font-size: 0.875rem; color: var(--text-secondary);">Correct</span>
        </label>
        <button type="button" class="btn btn-sm btn-danger remove-option-btn" style="padding: 0.25rem 0.5rem; background: #dc3545; color: white; border: none;">
            ✖
        </button>
    `;

    // Remove option button
    const removeBtn = optionDiv.querySelector('.remove-option-btn');
    if (removeBtn) {
        removeBtn.addEventListener('click', () => {
            optionDiv.remove();
            updateMCQOptionLetters();
        });
    }

    optionsList.appendChild(optionDiv);
}

/**
 * Update MCQ option letters after removal
 */
function updateMCQOptionLetters() {
    const optionsList = document.getElementById('mcq-options-list');
    if (!optionsList) return;

    const options = optionsList.querySelectorAll('.mcq-option-input');
    const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
    
    options.forEach((input, index) => {
        const letter = letters[index] || String.fromCharCode(65 + index);
        const optionDiv = input.closest('div');
        const letterSpan = optionDiv.querySelector('span');
        const radio = optionDiv.querySelector('.correct-option-radio');
        
        if (letterSpan) letterSpan.textContent = letter + ')';
        if (radio) radio.value = letter;
    });
}

/**
 * Open question editor modal
 */
function openQuestionEditor(questionIndex = null) {
    const modal = document.getElementById('question-editor-modal');
    const overlay = document.getElementById('question-modal-overlay');
    
    if (!modal || !overlay) {
        console.error('Question editor modal or overlay not found');
        return;
    }

    currentEditingQuestionIndex = questionIndex;
    
    // Reset form
    const questionForm = document.getElementById('question-form');
    if (questionForm) questionForm.reset();
    hideAllQuestionSections();
    
    const mcqOptionsList = document.getElementById('mcq-options-list');
    if (mcqOptionsList) mcqOptionsList.innerHTML = '';
    
    const questionTypeSelect = document.getElementById('question-type-select');
    if (questionTypeSelect) questionTypeSelect.value = '';
    
    // Update modal title
    const modalTitle = modal.querySelector('h2');
    if (modalTitle) {
        modalTitle.textContent = questionIndex !== null ? `Edit Question #${questionIndex + 1}` : `Add Question #${currentQuizQuestions.length + 1}`;
    }
    
    // If editing, populate form
    if (questionIndex !== null && currentQuizQuestions[questionIndex]) {
        const question = currentQuizQuestions[questionIndex];
        document.getElementById('question-text').value = question.question;
        document.getElementById('question-type-select').value = question.questionType || 'mcq';
        
        // Trigger change to show appropriate section
        document.getElementById('question-type-select').dispatchEvent(new Event('change'));
        
        if (question.questionType === 'mcq' && question.options) {
            // Populate MCQ options
            question.options.forEach(option => {
                addMCQOption();
                const lastInput = document.querySelector('#mcq-options-list .mcq-option-input:last-of-type');
                const lastRadio = document.querySelector('#mcq-options-list .correct-option-radio:last-of-type');
                if (lastInput) lastInput.value = option.text;
                if (lastRadio && option.correct) {
                    lastRadio.checked = true;
                }
            });
        } else if (question.questionType === 'fill-in-the-blank') {
            document.getElementById('fill-blank-answer').value = question.correctAnswer || '';
            document.getElementById('fill-blank-accepted').value = question.acceptedAnswers?.join(', ') || '';
            document.getElementById('fill-blank-hint').value = question.hint || '';
        } else if (question.questionType === 'short-answer') {
            document.getElementById('short-answer-answer').value = question.correctAnswer || '';
            document.getElementById('short-answer-accepted').value = question.acceptedAnswers?.join(', ') || '';
            document.getElementById('short-answer-hint').value = question.hint || '';
        }
    }

    modal.style.display = 'block';
    overlay.style.display = 'block';
    
    // Scroll to top
    modal.scrollTop = 0;
}

/**
 * Close question editor modal
 */
function closeQuestionEditor() {
    const modal = document.getElementById('question-editor-modal');
    const overlay = document.getElementById('question-modal-overlay');
    
    if (modal) modal.style.display = 'none';
    if (overlay) overlay.style.display = 'none';
    
    currentEditingQuestionIndex = null;
    document.getElementById('question-form').reset();
    hideAllQuestionSections();
    document.getElementById('mcq-options-list').innerHTML = '';
}

/**
 * Save question
 */
function saveQuestion() {
    const questionType = document.getElementById('question-type-select').value;
    const questionText = document.getElementById('question-text').value.trim();

    if (!questionType || !questionText) {
        alert('Please fill in all required fields');
        return;
    }

    // Get question number (sequential numbering)
    const questionNumber = currentEditingQuestionIndex !== null 
        ? currentEditingQuestionIndex + 1 
        : currentQuizQuestions.length + 1;

    let question = {
        id: currentEditingQuestionIndex !== null ? currentQuizQuestions[currentEditingQuestionIndex].id : Date.now(),
        number: questionNumber, // Sequential question number
        question: questionText,
        questionType: questionType
    };

    if (questionType === 'mcq') {
        // Get MCQ options
        const options = [];
        const optionInputs = document.querySelectorAll('#mcq-options-list .mcq-option-input');
        const correctRadio = document.querySelector('#mcq-options-list .correct-option-radio:checked');
        
        if (optionInputs.length < 2) {
            alert('Please add at least 2 options for MCQ');
            return;
        }

        if (!correctRadio) {
            alert('Please mark the correct answer');
            return;
        }

        const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
        optionInputs.forEach((input, index) => {
            const letter = letters[index] || String.fromCharCode(65 + index);
            const text = input.value.trim();
            if (text) {
                options.push({
                    letter: letter,
                    text: text,
                    correct: correctRadio.value === letter
                });
            }
        });

        if (options.length < 2) {
            alert('Please add at least 2 valid options');
            return;
        }

        // Check if at least one option is marked correct
        const hasCorrect = options.some(opt => opt.correct);
        if (!hasCorrect) {
            alert('Please mark at least one option as correct');
            return;
        }

        question.options = options;
    } else if (questionType === 'fill-in-the-blank') {
        const correctAnswer = document.getElementById('fill-blank-answer').value.trim();
        if (!correctAnswer) {
            alert('Please enter the correct answer');
            return;
        }

        question.correctAnswer = correctAnswer;
        
        const acceptedAnswers = document.getElementById('fill-blank-accepted').value.trim();
        if (acceptedAnswers) {
            question.acceptedAnswers = acceptedAnswers.split(',').map(a => a.trim()).filter(a => a);
        } else {
            question.acceptedAnswers = [correctAnswer];
        }

        const hint = document.getElementById('fill-blank-hint').value.trim();
        if (hint) {
            question.hint = hint;
        }
    } else if (questionType === 'short-answer') {
        const correctAnswer = document.getElementById('short-answer-answer').value.trim();
        if (!correctAnswer) {
            alert('Please enter the correct answer');
            return;
        }

        question.correctAnswer = correctAnswer;
        
        const acceptedAnswers = document.getElementById('short-answer-accepted').value.trim();
        if (acceptedAnswers) {
            question.acceptedAnswers = acceptedAnswers.split(',').map(a => a.trim()).filter(a => a);
        } else {
            question.acceptedAnswers = [correctAnswer];
        }

        const hint = document.getElementById('short-answer-hint').value.trim();
        if (hint) {
            question.hint = hint;
        }
    }

    // Add or update question
    if (currentEditingQuestionIndex !== null) {
        // Update existing question (keep the same number)
        question.number = currentQuizQuestions[currentEditingQuestionIndex].number || (currentEditingQuestionIndex + 1);
        currentQuizQuestions[currentEditingQuestionIndex] = question;
    } else {
        // Add new question with sequential number
        question.number = currentQuizQuestions.length + 1;
        currentQuizQuestions.push(question);
    }

    // Re-number all questions sequentially
    currentQuizQuestions.forEach((q, idx) => {
        q.number = idx + 1;
    });

    // Update number of questions field
    const questionsInput = document.getElementById('quiz-questions');
    if (questionsInput) {
        questionsInput.value = currentQuizQuestions.length;
    }

    // Re-render questions list
    renderQuestionsList();
    
    // Close modal
    closeQuestionEditor();
    
    // Show success message
    const successMsg = currentEditingQuestionIndex !== null 
        ? `Question #${question.number} updated successfully!` 
        : `Question #${question.number} added successfully!`;
    
    // Show temporary success indicator
    showQuestionSuccessMessage(successMsg);
}

/**
 * Show success message for question operations
 */
function showQuestionSuccessMessage(message) {
    // Create or update success message element
    let successEl = document.getElementById('question-success-message');
    if (!successEl) {
        successEl = document.createElement('div');
        successEl.id = 'question-success-message';
        successEl.style.cssText = 'position: fixed; top: 20px; right: 20px; background: #28a745; color: white; padding: 1rem 1.5rem; border-radius: var(--radius-md); box-shadow: var(--shadow-lg); z-index: 1002; font-weight: 600;';
        document.body.appendChild(successEl);
    }
    
    successEl.textContent = message;
    successEl.style.display = 'block';
    
    // Hide after 3 seconds
    setTimeout(() => {
        successEl.style.display = 'none';
    }, 3000);
}

/**
 * Render questions list
 */
function renderQuestionsList() {
    const container = document.getElementById('questions-list-container');
    const noQuestionsMsg = document.getElementById('no-questions-message');
    
    if (!container) return;

    if (currentQuizQuestions.length === 0) {
        if (noQuestionsMsg) noQuestionsMsg.style.display = 'block';
        container.innerHTML = `
            <p id="no-questions-message" style="text-align: center; color: var(--text-secondary); padding: 2rem; background: var(--bg-secondary); border-radius: var(--radius-md);">
                No questions added yet. Click "Add Question" to start.
            </p>
        `;
        return;
    }

    if (noQuestionsMsg) noQuestionsMsg.style.display = 'none';

    container.innerHTML = '';
    
    currentQuizQuestions.forEach((question, index) => {
        const questionCard = document.createElement('div');
        questionCard.style.background = 'white';
        questionCard.style.border = '2px solid var(--border-light)';
        questionCard.style.borderRadius = 'var(--radius-md)';
        questionCard.style.padding = '1.5rem';
        questionCard.style.marginBottom = '1rem';
        questionCard.style.position = 'relative';

        let questionContent = '';
        
        if (question.questionType === 'mcq') {
            questionContent = `
                <div style="margin-top: 0.5rem;">
                    <strong style="color: var(--text-secondary); font-size: 0.875rem;">Options:</strong>
                    <div style="margin-top: 0.5rem; display: flex; flex-direction: column; gap: 0.25rem;">
                        ${question.options.map(opt => `
                            <div style="padding: 0.5rem; background: ${opt.correct ? 'rgba(40, 167, 69, 0.1)' : 'var(--bg-secondary)'}; border-radius: 0.25rem; border-left: 3px solid ${opt.correct ? '#28a745' : 'transparent'};">
                                <span style="font-weight: 600; color: var(--primary-blue);">${opt.letter})</span>
                                <span>${opt.text}</span>
                                ${opt.correct ? '<span style="color: #28a745; margin-left: 0.5rem;">✓ Correct</span>' : ''}
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        } else if (question.questionType === 'fill-in-the-blank') {
            questionContent = `
                <div style="margin-top: 0.5rem;">
                    <strong style="color: var(--text-secondary); font-size: 0.875rem;">Correct Answer:</strong>
                    <div style="padding: 0.5rem; background: rgba(40, 167, 69, 0.1); border-radius: 0.25rem; margin-top: 0.25rem; color: #28a745; font-weight: 600;">
                        ${question.correctAnswer}
                    </div>
                    ${question.acceptedAnswers && question.acceptedAnswers.length > 1 ? `
                        <div style="margin-top: 0.5rem; font-size: 0.875rem; color: var(--text-secondary);">
                            Also accepted: ${question.acceptedAnswers.slice(1).join(', ')}
                        </div>
                    ` : ''}
                    ${question.hint ? `
                        <div style="margin-top: 0.5rem; font-size: 0.875rem; color: var(--text-secondary);">
                            💡 Hint: ${question.hint}
                        </div>
                    ` : ''}
                </div>
            `;
        } else if (question.questionType === 'short-answer') {
            questionContent = `
                <div style="margin-top: 0.5rem;">
                    <strong style="color: var(--text-secondary); font-size: 0.875rem;">Correct Answer:</strong>
                    <div style="padding: 0.5rem; background: rgba(40, 167, 69, 0.1); border-radius: 0.25rem; margin-top: 0.25rem; color: #28a745;">
                        ${question.correctAnswer}
                    </div>
                    ${question.acceptedAnswers && question.acceptedAnswers.length > 1 ? `
                        <div style="margin-top: 0.5rem; font-size: 0.875rem; color: var(--text-secondary);">
                            Also accepted: ${question.acceptedAnswers.slice(1).join(', ')}
                        </div>
                    ` : ''}
                    ${question.hint ? `
                        <div style="margin-top: 0.5rem; font-size: 0.875rem; color: var(--text-secondary);">
                            💡 Hint: ${question.hint}
                        </div>
                    ` : ''}
                </div>
            `;
        }

        const typeLabels = {
            'mcq': 'Multiple Choice',
            'fill-in-the-blank': 'Fill-in-the-blank',
            'short-answer': 'Short Answer'
        };

        // Get question number (use stored number or index + 1)
        const questionNumber = question.number || (index + 1);

        questionCard.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem;">
                <div style="flex: 1;">
                    <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
                        <span style="background: var(--primary-blue); color: white; padding: 0.25rem 0.5rem; border-radius: 50%; font-weight: 600; font-size: 0.875rem; min-width: 1.5rem; text-align: center;">
                            ${questionNumber}
                        </span>
                        <span style="background: rgba(15, 76, 117, 0.1); color: var(--primary-blue); padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.875rem; font-weight: 600;">
                            ${typeLabels[question.questionType] || 'Question'}
                        </span>
                    </div>
                    <div style="font-weight: 600; color: var(--text-primary); margin-bottom: 0.5rem;">
                        ${question.question}
                    </div>
                    ${questionContent}
                </div>
                <div style="display: flex; gap: 0.5rem; margin-left: 1rem;">
                    <button class="btn btn-sm btn-outline edit-question-btn" data-index="${index}" style="padding: 0.25rem 0.75rem; font-size: 0.875rem;" title="Edit Question">
                        ✏️ Edit
                    </button>
                    <button class="btn btn-sm btn-danger delete-question-btn" data-index="${index}" style="padding: 0.25rem 0.75rem; font-size: 0.875rem; background: #dc3545; color: white; border: none;" title="Delete Question">
                        🗑️ Delete
                    </button>
                </div>
            </div>
        `;

        // Add event listeners
        const editBtn = questionCard.querySelector('.edit-question-btn');
        const deleteBtn = questionCard.querySelector('.delete-question-btn');

        if (editBtn) {
            editBtn.addEventListener('click', () => {
                openQuestionEditor(index);
            });
        }

        if (deleteBtn) {
            deleteBtn.addEventListener('click', () => {
                if (confirm('Are you sure you want to delete this question?')) {
                    currentQuizQuestions.splice(index, 1);
                    
                    // Update number of questions field
                    const questionsInput = document.getElementById('quiz-questions');
                    if (questionsInput) {
                        questionsInput.value = currentQuizQuestions.length;
                    }
                    
                    renderQuestionsList();
                }
            });
        }

        container.appendChild(questionCard);
    });
}

/**
 * Handle schedule type change - show/hide appropriate options
 */
function handleScheduleTypeChange(scheduleType) {
    hideAllScheduleOptions();
    
    switch(scheduleType) {
        case 'fixed':
            document.getElementById('fixed-time-options').style.display = 'block';
            break;
        case 'recurring':
            document.getElementById('recurring-options').style.display = 'block';
            break;
        case 'on-demand':
            document.getElementById('on-demand-options').style.display = 'block';
            break;
        case 'group':
            document.getElementById('group-options').style.display = 'block';
            break;
        case 'prerequisite':
            document.getElementById('prerequisite-options').style.display = 'block';
            break;
        case 'progressive':
            document.getElementById('progressive-options').style.display = 'block';
            break;
        case 'challenge':
            document.getElementById('challenge-options').style.display = 'block';
            break;
    }
}

/**
 * Hide all schedule option sections
 */
function hideAllScheduleOptions() {
    const options = ['fixed-time-options', 'recurring-options', 'on-demand-options', 
                     'group-options', 'prerequisite-options', 'progressive-options', 'challenge-options'];
    options.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'none';
    });
}

/**
 * Get schedule data based on schedule type
 */
function getScheduleData(scheduleType) {
    const scheduleData = { type: scheduleType };
    
    switch(scheduleType) {
        case 'fixed':
            scheduleData.startDateTime = document.getElementById('quiz-start-datetime').value;
            scheduleData.endDateTime = document.getElementById('quiz-end-datetime').value;
            break;
        case 'recurring':
            scheduleData.frequency = document.getElementById('recurring-frequency').value;
            scheduleData.startDateTime = document.getElementById('recurring-start-datetime').value;
            scheduleData.endDate = document.getElementById('recurring-end-date').value;
            scheduleData.autoClose = document.getElementById('auto-close-recurring').checked;
            break;
        case 'on-demand':
            scheduleData.startDateTime = document.getElementById('on-demand-start').value;
            scheduleData.endDateTime = document.getElementById('on-demand-end').value;
            break;
        case 'group':
            const groups = [];
            ['group-all', 'group-section-a', 'group-section-b', 'group-year-1', 'group-year-2', 'group-batch-2024'].forEach(id => {
                const checkbox = document.getElementById(id);
                if (checkbox && checkbox.checked) {
                    groups.push(checkbox.value);
                }
            });
            scheduleData.groups = groups;
            break;
        case 'prerequisite':
            scheduleData.prerequisiteQuiz = document.getElementById('prerequisite-quiz').value;
            scheduleData.minScore = parseInt(document.getElementById('prerequisite-score').value || 60);
            break;
        case 'progressive':
            scheduleData.unlockType = document.getElementById('progressive-unlock').value;
            if (scheduleData.unlockType === 'days') {
                scheduleData.days = parseInt(document.getElementById('progressive-days').value || 3);
            } else if (scheduleData.unlockType === 'date') {
                scheduleData.unlockDate = document.getElementById('progressive-date').value;
            }
            break;
        case 'challenge':
            scheduleData.startDateTime = document.getElementById('challenge-start').value;
            scheduleData.duration = parseFloat(document.getElementById('challenge-duration').value || 1);
            break;
    }
    
    return scheduleData;
}

/**
 * Schedule a new quiz with enhanced features
 */
function scheduleNewQuiz(quizInfo) {
    // Generate new quiz ID
    let maxId = 0;
    Object.values(quizData).flat().forEach(quiz => {
        if (quiz.id > maxId) maxId = quiz.id;
    });
    const newId = maxId + 1;

    // Get course name
    const courseNames = {
        python: 'Introduction to Python',
        webdev: 'Web Development',
        database: 'Database Design',
        ml: 'Machine Learning',
        electronics: 'Electronics & Engineering',
        math: 'Mathematics',
        literature: 'Literature',
        science: 'Science'
    };

    // Calculate status based on schedule
    let status = 'upcoming';
    const now = new Date();
    if (quizInfo.scheduleData.startDateTime) {
        const startDate = new Date(quizInfo.scheduleData.startDateTime);
        const endDate = quizInfo.scheduleData.endDateTime ? new Date(quizInfo.scheduleData.endDateTime) : null;
        
        if (now < startDate) {
            status = 'upcoming';
        } else if (endDate && now > endDate) {
            status = 'closed';
        } else {
            status = 'active';
        }
    }

    // Create quiz object
    const newQuiz = {
        id: newId,
        title: quizInfo.title,
        subject: quizInfo.subject || quizInfo.title,
        description: quizInfo.description || '',
        course: courseNames[quizInfo.courseId] || quizInfo.courseId,
        courseId: quizInfo.courseId,
        questions: quizInfo.questions,
        marks: quizInfo.marks || 100,
        timeLimit: quizInfo.timeLimit,
        difficulty: quizInfo.difficulty || 'medium',
        status: status,
        type: 'academic',
        scheduleType: quizInfo.scheduleType,
        scheduleData: quizInfo.scheduleData,
        randomOrder: quizInfo.randomOrder || false,
        negativeMarking: quizInfo.negativeMarking || false,
        multipleAttempts: quizInfo.multipleAttempts || false,
        createdAt: new Date().toISOString(),
        questionsList: quizInfo.questionsList || [] // Questions added during quiz creation
    };

    // Add to quizData
    if (!quizData[quizInfo.courseId]) {
        quizData[quizInfo.courseId] = [];
    }
    quizData[quizInfo.courseId].push(newQuiz);

    // Save to localStorage (for persistence across sessions)
    localStorage.setItem('lms_quizData', JSON.stringify(quizData));

    // Re-render scheduled quizzes
    renderScheduledQuizzesTable('all');
    
    // Update quiz count
    updateAdminStats();
}

/**
 * Render scheduled quizzes in table format for admin
 */
function renderScheduledQuizzesTable(statusFilter = 'all') {
    const tableBody = document.getElementById('quiz-table-body');
    if (!tableBody) return;

    tableBody.innerHTML = '';

    // Get all quizzes
    let allQuizzes = [];
    Object.keys(quizData).forEach(courseId => {
        quizData[courseId].forEach(quiz => {
            if (quiz.type === 'academic' || !quiz.type) {
                // Calculate current status
                let currentStatus = quiz.status || 'upcoming';
                if (quiz.scheduleData && quiz.scheduleData.startDateTime) {
                    const now = new Date();
                    const startDate = new Date(quiz.scheduleData.startDateTime);
                    const endDate = quiz.scheduleData.endDateTime ? new Date(quiz.scheduleData.endDateTime) : null;
                    
                    if (now < startDate) {
                        currentStatus = 'upcoming';
                    } else if (endDate && now > endDate) {
                        currentStatus = 'closed';
                    } else {
                        currentStatus = 'active';
                    }
                }
                
                allQuizzes.push({ ...quiz, courseId, currentStatus });
            }
        });
    });

    // Filter by status
    if (statusFilter !== 'all') {
        allQuizzes = allQuizzes.filter(quiz => quiz.currentStatus === statusFilter);
    }

    // Sort by start date (newest first)
    allQuizzes.sort((a, b) => {
        const dateA = a.scheduleData?.startDateTime ? new Date(a.scheduleData.startDateTime) : new Date(a.createdAt || 0);
        const dateB = b.scheduleData?.startDateTime ? new Date(b.scheduleData.startDateTime) : new Date(b.createdAt || 0);
        return dateB - dateA;
    });

    if (allQuizzes.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="7" style="padding: 2rem; text-align: center; color: var(--text-secondary);">
                    No quizzes found. ${statusFilter !== 'all' ? `Try selecting "All Status".` : 'Schedule a new quiz to get started!'}
                </td>
            </tr>
        `;
        return;
    }

    allQuizzes.forEach(quiz => {
        const row = document.createElement('tr');
        row.style.borderBottom = '1px solid var(--border-light)';
        row.style.transition = 'background-color 0.2s';
        
        row.onmouseenter = () => row.style.backgroundColor = 'var(--bg-secondary)';
        row.onmouseleave = () => row.style.backgroundColor = '';

        // Get schedule type label
        const scheduleTypeLabels = {
            'fixed': 'Fixed Time',
            'recurring': 'Recurring',
            'on-demand': 'On-Demand',
            'group': 'Group-Based',
            'prerequisite': 'Prerequisite',
            'progressive': 'Progressive',
            'challenge': 'Challenge Mode'
        };

        // Format dates
        const startDate = quiz.scheduleData?.startDateTime ? new Date(quiz.scheduleData.startDateTime).toLocaleString() : 'Not set';
        const endDate = quiz.scheduleData?.endDateTime ? new Date(quiz.scheduleData.endDateTime).toLocaleString() : 
                       (quiz.scheduleData?.duration ? `${quiz.scheduleData.duration}h duration` : 'Not set');

        // Status badge
        const statusBadges = {
            'active': { emoji: '🟢', text: 'Active', color: '#28a745' },
            'upcoming': { emoji: '🟡', text: 'Upcoming', color: '#ffc107' },
            'closed': { emoji: '🔴', text: 'Closed', color: '#dc3545' }
        };
        const status = statusBadges[quiz.currentStatus] || statusBadges.upcoming;

        row.innerHTML = `
            <td style="padding: 1rem;">
                <strong style="color: var(--text-primary);">${quiz.title}</strong>
                ${quiz.description ? `<div style="font-size: 0.875rem; color: var(--text-secondary); margin-top: 0.25rem;">${quiz.description.substring(0, 50)}${quiz.description.length > 50 ? '...' : ''}</div>` : ''}
            </td>
            <td style="padding: 1rem; color: var(--text-primary);">${quiz.subject || quiz.title}</td>
            <td style="padding: 1rem;">
                <span style="background: rgba(15, 76, 117, 0.1); color: var(--primary-blue); padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.875rem; font-weight: 600;">
                    ${scheduleTypeLabels[quiz.scheduleType] || 'Fixed Time'}
                </span>
            </td>
            <td style="padding: 1rem; color: var(--text-primary); font-size: 0.875rem;">${startDate}</td>
            <td style="padding: 1rem; color: var(--text-primary); font-size: 0.875rem;">${endDate}</td>
            <td style="padding: 1rem;">
                <span style="background: ${status.color}20; color: ${status.color}; padding: 0.25rem 0.75rem; border-radius: 20px; font-size: 0.875rem; font-weight: 600; display: inline-flex; align-items: center; gap: 0.25rem;">
                    ${status.emoji} ${status.text}
                </span>
            </td>
            <td style="padding: 1rem; text-align: center;">
                <div style="display: flex; gap: 0.5rem; justify-content: center;">
                    <button class="btn btn-sm btn-outline edit-quiz-btn" data-quiz-id="${quiz.id}" style="padding: 0.25rem 0.75rem; font-size: 0.875rem;" title="Edit Schedule">
                        ✏️ Edit
                    </button>
                    <button class="btn btn-sm btn-outline view-submissions-btn" data-quiz-id="${quiz.id}" style="padding: 0.25rem 0.75rem; font-size: 0.875rem;" title="View Submissions">
                        👁️ View
                    </button>
                    <button class="btn btn-sm btn-danger cancel-quiz-btn" data-quiz-id="${quiz.id}" style="padding: 0.25rem 0.75rem; font-size: 0.875rem; background: #dc3545; color: white; border: none;" title="Cancel Quiz">
                        ✖️ Cancel
                    </button>
                </div>
            </td>
        `;

        // Add event listeners
        const editBtn = row.querySelector('.edit-quiz-btn');
        const viewBtn = row.querySelector('.view-submissions-btn');
        const cancelBtn = row.querySelector('.cancel-quiz-btn');

        if (editBtn) {
            editBtn.addEventListener('click', () => editQuizSchedule(quiz.id));
        }
        if (viewBtn) {
            viewBtn.addEventListener('click', () => viewQuizSubmissions(quiz.id));
        }
        if (cancelBtn) {
            cancelBtn.addEventListener('click', () => cancelQuiz(quiz.id));
        }

        tableBody.appendChild(row);
    });
}

/**
 * Toggle calendar view
 */
function toggleCalendarView() {
    const tableView = document.getElementById('quiz-table-view');
    const calendarView = document.getElementById('quiz-calendar-view');
    const viewBtn = document.getElementById('view-calendar-btn');

    if (!tableView || !calendarView || !viewBtn) return;

    if (calendarView.style.display === 'none') {
        tableView.style.display = 'none';
        calendarView.style.display = 'block';
        viewBtn.innerHTML = '<span>📋</span> Table View';
        renderCalendarView();
    } else {
        tableView.style.display = 'block';
        calendarView.style.display = 'none';
        viewBtn.innerHTML = '<span>📅</span> Calendar View';
    }
}

// Calendar state
let currentCalendarMonth = new Date().getMonth();
let currentCalendarYear = new Date().getFullYear();

/**
 * Render calendar view for quizzes
 */
function renderCalendarView() {
    const container = document.getElementById('calendar-container');
    const monthYearHeader = document.getElementById('calendar-month-year');
    if (!container) return;

    container.innerHTML = '';

    // Get current month
    const year = currentCalendarYear;
    const month = currentCalendarMonth;
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    // Update month/year header
    if (monthYearHeader) {
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                           'July', 'August', 'September', 'October', 'November', 'December'];
        monthYearHeader.textContent = `${monthNames[month]} ${year}`;
    }

    // Month navigation
    const prevMonthBtn = document.getElementById('prev-month-btn');
    const nextMonthBtn = document.getElementById('next-month-btn');
    
    if (prevMonthBtn) {
        prevMonthBtn.onclick = () => {
            if (currentCalendarMonth === 0) {
                currentCalendarMonth = 11;
                currentCalendarYear--;
            } else {
                currentCalendarMonth--;
            }
            renderCalendarView();
        };
    }
    
    if (nextMonthBtn) {
        nextMonthBtn.onclick = () => {
            if (currentCalendarMonth === 11) {
                currentCalendarMonth = 0;
                currentCalendarYear++;
            } else {
                currentCalendarMonth++;
            }
            renderCalendarView();
        };
    }

    // Day headers
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    dayNames.forEach(day => {
        const dayHeader = document.createElement('div');
        dayHeader.style.padding = '0.75rem';
        dayHeader.style.textAlign = 'center';
        dayHeader.style.fontWeight = '600';
        dayHeader.style.color = 'var(--text-primary)';
        dayHeader.style.background = 'var(--bg-secondary)';
        dayHeader.textContent = day;
        container.appendChild(dayHeader);
    });

    // Empty cells for days before month starts
    for (let i = 0; i < startingDayOfWeek; i++) {
        const emptyCell = document.createElement('div');
        emptyCell.style.minHeight = '80px';
        container.appendChild(emptyCell);
    }

    // Get all quizzes
    let allQuizzes = [];
    Object.keys(quizData).forEach(courseId => {
        quizData[courseId].forEach(quiz => {
            if (quiz.type === 'academic' || !quiz.type) {
                if (quiz.scheduleData && quiz.scheduleData.startDateTime) {
                    allQuizzes.push({ ...quiz, startDate: new Date(quiz.scheduleData.startDateTime) });
                }
            }
        });
    });

    // Create calendar days
    for (let day = 1; day <= daysInMonth; day++) {
        const dayCell = document.createElement('div');
        dayCell.style.minHeight = '80px';
        dayCell.style.padding = '0.5rem';
        dayCell.style.border = '1px solid var(--border-light)';
        dayCell.style.borderRadius = 'var(--radius-sm)';
        dayCell.style.background = 'white';
        dayCell.style.position = 'relative';

        const dayNumber = document.createElement('div');
        dayNumber.style.fontWeight = '600';
        dayNumber.style.marginBottom = '0.5rem';
        dayNumber.textContent = day;
        dayCell.appendChild(dayNumber);

        // Find quizzes for this day
        const dayQuizzes = allQuizzes.filter(quiz => {
            const quizDate = quiz.startDate;
            return quizDate.getDate() === day && 
                   quizDate.getMonth() === month && 
                   quizDate.getFullYear() === year;
        });

        dayQuizzes.forEach(quiz => {
            const quizBadge = document.createElement('div');
            quizBadge.style.background = 'var(--primary-blue)';
            quizBadge.style.color = 'white';
            quizBadge.style.padding = '0.25rem 0.5rem';
            quizBadge.style.borderRadius = '0.25rem';
            quizBadge.style.fontSize = '0.75rem';
            quizBadge.style.marginBottom = '0.25rem';
            quizBadge.style.cursor = 'pointer';
            quizBadge.title = quiz.title;
            quizBadge.textContent = quiz.title.substring(0, 15) + (quiz.title.length > 15 ? '...' : '');
            dayCell.appendChild(quizBadge);
        });

        container.appendChild(dayCell);
    }
}

/**
 * Edit quiz schedule
 */
function editQuizSchedule(quizId) {
    // Find quiz
    let quiz = null;
    for (const courseId in quizData) {
        const found = quizData[courseId].find(q => q.id === quizId);
        if (found) {
            quiz = found;
            break;
        }
    }

    if (!quiz) {
        alert('Quiz not found');
        return;
    }

    // Show form and populate with quiz data
    const formContainer = document.getElementById('quiz-creation-form-container');
    if (formContainer) {
        formContainer.style.display = 'block';
        // Populate form fields (implementation can be added)
        alert('Edit functionality - Quiz data will be loaded into form');
    }
}

/**
 * View quiz submissions
 */
function viewQuizSubmissions(quizId) {
    alert(`View submissions for quiz ${quizId}. This feature will show all student submissions and scores.`);
    // Implementation can be added to show a modal with submissions
}

/**
 * Cancel quiz
 */
function cancelQuiz(quizId) {
    if (!confirm('Are you sure you want to cancel this quiz? This action cannot be undone.')) {
        return;
    }

    // Find and remove quiz
    for (const courseId in quizData) {
        const index = quizData[courseId].findIndex(q => q.id === quizId);
        if (index !== -1) {
            quizData[courseId].splice(index, 1);
            break;
        }
    }

    // Save to localStorage
    localStorage.setItem('lms_quizData', JSON.stringify(quizData));

    // Re-render
    renderScheduledQuizzesTable('all');
    alert('Quiz cancelled successfully.');
}

/**
 * Initialize attendance marking
 */
function initAttendanceMarking() {
    const courseSelect = document.getElementById('attendance-course-select');
    if (!courseSelect) return;

    // Set today's date as default
    const dateInput = document.getElementById('attendance-date');
    if (dateInput) {
        dateInput.value = new Date().toISOString().split('T')[0];
    }

    courseSelect.addEventListener('change', () => {
        const courseId = courseSelect.value;
        if (courseId) {
            renderAttendanceMarkingList(courseId);
        } else {
            document.getElementById('attendance-students-list').innerHTML = '';
        }
    });
}

/**
 * Render attendance marking list for a course
 */
function renderAttendanceMarkingList(courseId) {
    const container = document.getElementById('attendance-students-list');
    if (!container) return;

    // Get all students
    const students = [
        { username: 'Tanmay', name: 'Tanmay' },
        { username: 'Sarthak', name: 'Sarthak' },
        { username: 'Ayur', name: 'Ayur' }
    ];

    container.innerHTML = `
        <h3 class="subsection-title">Mark Attendance</h3>
        <div class="attendance-marking-list">
            ${students.map((student, index) => `
                <div class="attendance-marking-item" style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--bg-card); border: 1px solid var(--border-light); border-radius: var(--radius-md); margin-bottom: 0.5rem;">
                    <div>
                        <strong>${student.name}</strong>
                        <div style="font-size: 0.875rem; color: var(--text-secondary);">${student.username}</div>
                    </div>
                    <div style="display: flex; gap: 1rem;">
                        <button class="btn btn-success mark-present-btn" data-student="${student.username}" data-course="${courseId}" style="padding: 0.5rem 1rem;">Present</button>
                        <button class="btn btn-outline mark-absent-btn" data-student="${student.username}" data-course="${courseId}" style="padding: 0.5rem 1rem;">Absent</button>
                    </div>
                </div>
            `).join('')}
        </div>
        <button class="btn btn-primary" id="save-attendance-btn" style="margin-top: 1rem; width: 100%;">Save Attendance</button>
    `;

    // Add event listeners for attendance buttons
    container.querySelectorAll('.mark-present-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const student = btn.getAttribute('data-student');
            const course = btn.getAttribute('data-course');
            markAttendance(student, course, 'present');
        });
    });

    container.querySelectorAll('.mark-absent-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const student = btn.getAttribute('data-student');
            const course = btn.getAttribute('data-course');
            markAttendance(student, course, 'absent');
        });
    });

    // Save attendance button
    const saveBtn = document.getElementById('save-attendance-btn');
    if (saveBtn) {
        saveBtn.addEventListener('click', () => {
            const date = document.getElementById('attendance-date').value;
            if (!date) {
                alert('Please select a date');
                return;
            }
            saveAttendanceForDate(date);
        });
    }
}

// Store attendance marking temporarily
let attendanceMarkings = {};

/**
 * Mark attendance for a student
 */
function markAttendance(studentUsername, courseId, status) {
    const date = document.getElementById('attendance-date')?.value;
    if (!date) {
        alert('Please select a date first');
        return;
    }

    const key = `${courseId}-${date}-${studentUsername}`;
    attendanceMarkings[key] = status;

    // Update button styles
    const item = event.target.closest('.attendance-marking-item');
    if (item) {
        const presentBtn = item.querySelector('.mark-present-btn');
        const absentBtn = item.querySelector('.mark-absent-btn');
        
        if (status === 'present') {
            presentBtn.classList.add('btn-success');
            presentBtn.classList.remove('btn-outline');
            absentBtn.classList.remove('btn-danger');
            absentBtn.classList.add('btn-outline');
        } else {
            absentBtn.classList.add('btn-danger');
            absentBtn.classList.remove('btn-outline');
            presentBtn.classList.remove('btn-success');
            presentBtn.classList.add('btn-outline');
        }
    }
}

/**
 * Save attendance for the selected date
 */
function saveAttendanceForDate(date) {
    const courseId = document.getElementById('attendance-course-select').value;
    if (!courseId) {
        alert('Please select a course');
        return;
    }

    // Get all markings for this course and date
    const courseMarkings = {};
    Object.keys(attendanceMarkings).forEach(key => {
        if (key.startsWith(`${courseId}-${date}-`)) {
            const student = key.split('-')[2];
            courseMarkings[student] = attendanceMarkings[key];
        }
    });

    if (Object.keys(courseMarkings).length === 0) {
        alert('Please mark attendance for at least one student');
        return;
    }

    // Save to localStorage
    let allAttendance = JSON.parse(localStorage.getItem('lms_attendance') || '{}');
    if (!allAttendance[courseId]) {
        allAttendance[courseId] = {};
    }
    if (!allAttendance[courseId][date]) {
        allAttendance[courseId][date] = {};
    }
    
    Object.keys(courseMarkings).forEach(student => {
        allAttendance[courseId][date][student] = courseMarkings[student];
    });

    localStorage.setItem('lms_attendance', JSON.stringify(allAttendance));

    // Update course attendance data
    updateCourseAttendance(courseId);

    alert('Attendance saved successfully!');
    
    // Clear temporary markings
    attendanceMarkings = {};
}

/**
 * Update course attendance statistics
 */
function updateCourseAttendance(courseId) {
    // This would recalculate attendance percentages
    // For now, we'll just reload the data when students view their attendance
}

/**
 * Initialize admin messaging
 */
function initAdminMessaging() {
    const form = document.getElementById('admin-message-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const recipients = [];
        const checkboxes = form.querySelectorAll('input[type="checkbox"]:checked');
        
        if (checkboxes.length === 0) {
            alert('Please select at least one recipient');
            return;
        }

        checkboxes.forEach(cb => {
            if (cb.value === 'all') {
                recipients.push('Tanmay', 'Sarthak', 'Ayur');
            } else {
                recipients.push(cb.value);
            }
        });

        // Remove duplicates
        const uniqueRecipients = [...new Set(recipients)];

        const subject = document.getElementById('message-subject').value;
        const content = document.getElementById('message-content').value;

        const admin = getCurrentUser();
        if (!admin) return;

        // Send message to each recipient
        sendMessageToStudents(uniqueRecipients, admin.name, subject, content);

        // Reset form
        form.reset();
        alert('Messages sent successfully!');
    });

    // Handle "All Students" checkbox
    const allCheckbox = document.getElementById('recipient-all');
    if (allCheckbox) {
        allCheckbox.addEventListener('change', (e) => {
            const checkboxes = form.querySelectorAll('input[type="checkbox"]:not(#recipient-all)');
            checkboxes.forEach(cb => {
                cb.checked = e.target.checked;
            });
        });
    }
}

/**
 * Send message to specific students
 */
function sendMessageToStudents(recipients, sender, subject, content) {
    let allMessages = JSON.parse(localStorage.getItem('lms_messages') || '{}');

    recipients.forEach(recipient => {
        if (!allMessages[recipient]) {
            allMessages[recipient] = [];
        }

        const message = {
            id: Date.now() + Math.random(),
            sender: sender,
            subject: subject,
            content: content,
            date: new Date().toISOString().split('T')[0],
            read: false
        };

        allMessages[recipient].push(message);
    });

    localStorage.setItem('lms_messages', JSON.stringify(allMessages));
}

/**
 * Load messages for current student
 */
function loadStudentMessages() {
    const user = getCurrentUser();
    if (!user || user.userType !== 'student') return;

    const allMessages = JSON.parse(localStorage.getItem('lms_messages') || '{}');
    const studentMessages = allMessages[user.username] || [];

    // Update messagesData
    messagesData.length = 0;
    messagesData.push(...studentMessages);

    // Re-render if on messages page
    if (document.getElementById('messages-section')?.classList.contains('active')) {
        renderMessages();
    }
}

/**
 * Load admin dashboard data
 */
function loadAdminDashboard() {
    // Load quiz data from localStorage if available
    const savedQuizData = localStorage.getItem('lms_quizData');
    if (savedQuizData) {
        try {
            const parsed = JSON.parse(savedQuizData);
            // Merge with existing quizData
            Object.keys(parsed).forEach(courseId => {
                if (quizData[courseId]) {
                    // Add new quizzes that don't exist
                    parsed[courseId].forEach(newQuiz => {
                        const exists = quizData[courseId].some(q => q.id === newQuiz.id);
                        if (!exists) {
                            quizData[courseId].push(newQuiz);
                        }
                    });
                } else {
                    quizData[courseId] = parsed[courseId];
                }
            });
        } catch (e) {
            console.error('Error loading quiz data:', e);
        }
    }

    // Render scheduled quizzes
    renderScheduledQuizzesTable('all');
    
    // Update stats
    updateAdminStats();
}

/**
 * Update admin dashboard statistics
 */
function updateAdminStats() {
    let totalQuizzes = 0;
    Object.values(quizData).forEach(quizzes => {
        totalQuizzes += quizzes.filter(q => q.type === 'academic' || !q.type).length;
    });

    const quizCountEl = document.getElementById('admin-quizzes-count');
    if (quizCountEl) {
        quizCountEl.textContent = totalQuizzes;
    }
}

// Initialize admin functions when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initAdminFunctions();
    });
} else {
    initAdminFunctions();
}

// Load student messages on page load
if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
    loadStudentMessages();
}


