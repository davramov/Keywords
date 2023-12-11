// Sample job listing and resume text (you can replace this with user input)
let jobListingText = "";
let resumeText = "";

// Additional common words to filter out
// const commonWords = [
//     "and", "the", "in", "to", "of", "for", "with",
//     "a", "an", "and", "are", "as", "at", "be", "by", "for", "from", "has", "have", "in", "is", "it", "of", "on", "or", "the", "to", "with",
//     "from", "into", "over", "under", "during", "through", "before", "after", "above", "below", "we", "andor", "we'd", "we're", "got", "what", "you've", "will", "you", "your", "it's", "its", "it", "our", "us", "that"
//     /* Add more common words here */
// ];


const commonWords = [
    "a", "about", "above", "after", "again", "against", "ain't", "all", "am", "an", "and", "any", "are", "aren't", "as", "at", "be", "because", "been", "before", "being", "below", "between", "both", "but", "by",
    "can't", "cannot", "could", "couldn't", "did", "didn't", "do", "does", "doesn't", "doing", "don't", "down", "during",
    "each", "few", "for", "from", "further",
    "had", "hadn't", "has", "hasn't", "have", "haven't", "having", "he", "he'd", "he'll", "he's", "her", "here", "here's", "hers", "herself", "him", "himself", "his", "how", "how's",
    "i", "i'd", "i'll", "i'm", "i've", "if", "in", "into", "is", "isn't", "it", "it's", "its", "itself",
    "just",
    "let's",
    "ma'am", "me", "more", "most", "mustn't", "my", "myself",
    "no", "nor", "not",
    "o'clock", "of", "off", "on", "once", "only", "or", "other", "ought", "our", "ours", "ourselves", "out", "over", "own",
    "re",
    "s", "shan't", "she", "she'd", "she'll", "she's", "should", "shouldn't", "so", "some", "such",
    "than", "that", "that's", "the", "their", "theirs", "them", "themselves", "then", "there", "there's", "these", "they", "they'd", "they'll", "they're", "they've", "this", "those", "through", "to", "too",
    "under", "until", "up",
    "very",
    "was", "wasn't", "we", "we'd", "we'll", "we're", "we've", "were", "weren't", "what", "what's", "when", "when's", "where", "where's", "which", "while", "who", "who's", "whom", "why", "why's", "with", "won't", "would", "wouldn't",
    "you", "you'd", "you'll", "you're", "you've", "your", "yours", "yourself", "yourselves",
    "able", "abst", "accordance", "according", "accordingly", "across", "act", "actually",
    "added", "adj", "affected", "affecting", "affects", "afterwards", "ah", "almost",
    "alone", "along", "already", "also", "although", "always", "among", "amongst", "announce",
    "another", "anybody", "anyhow", "anymore", "anyone", "anything", "anyway", "anyways", "anywhere",
    "apparently", "approximately", "arent", "arise", "around", "aside", "ask", "asking", "auth",
    "available", "away", "awfully", "b", "back", "became", "become", "becomes", "becoming",
    "beforehand", "begin", "beginning", "beginnings", "begins", "behind", "believe", "beside",
    "besides", "beyond", "biol", "brief", "briefly", "c", "ca", "came", "cannot", "can't", "cause",
    "causes", "certain", "certainly", "co", "com", "come", "comes", "contain", "containing",
    "contains", "couldnt", "date", "different", "done", "downwards", "due", "e", "ed", "edu",
    "effect", "eg", "eight", "eighty", "either", "else", "elsewhere", "end", "ending", "enough",
    "especially", "et", "etc", "even", "ever", "every", "everybody", "everyone", "everything",
    "everywhere", "ex", "except", "f", "far", "ff", "fifth", "first", "five", "fix", "followed", "following", "follows", "former", "formerly", "forth", "found", "four", "furthermore", "g",
    "gave", "get", "gets", "getting", "give", "given", "gives", "giving", "go", "goes", "gone", "got", "gotten", "h", "happens", "hardly", "hed", "hence", "hereafter", "hereby", "herein", "heres", "hereupon", "hes", "hi", "hid", "hither",
    "home", "howbeit", "however", "hundred", "id", "ie", "im", "immediate", "immediately", "importance", "important", "inc", "indeed", "index", "information", "instead", "invention", "inward", "itd", "it'll", "j", "k", "kept", "kg", "km", "know",
    "known", "knows", "l", "largely", "last", "lately", "later", "latter", "latterly", "least", "less", "lest", "let", "lets", "like", "liked", "likely", "line", "little", "look", "looking", "looks", "ltd", "made", "mainly", "make", "makes", "many",
    "may", "maybe", "mean", "means", "meantime", "meanwhile", "merely", "mg", "might", "million", "miss", "ml", "moreover", "mostly", "mr", "mrs", "much", "mug", "must", "n", "na", "name", "namely", "nay", "nd", "near", "nearly", "necessarily",
    "necessary", "need", "needs", "neither", "never", "nevertheless", "new", "next", "nine", "ninety", "nobody", "non", "none", "nonetheless", "noone", "normally", "nos", "noted", "nothing", "nowhere", "obtain", "obtained", "obviously", "often",
    "oh", "ok", "okay", "old", "omitted", "one", "ones", "onto", "ord", "others", "otherwise", "outside", "overall", "owing", "p", "page", "pages", "part", "particular", "particularly", "past", "per", "perhaps", "placed", "please", "plus", "poorly", "possible", "possibly", "potentially", "pp", "predominantly", "present", "previously", "primarily", "probably", "promptly", "proud", "provides", "put", "q", "que", "quickly", "quite", "qv", "r", "ran", "rather", "rd", "readily", "really", "recent", "recently", "ref", "refs", "regarding", "regardless", "regards", "related", "relatively", "research", "respectively", "resulted", "resulting", "results", "right", "run", "said", "saw", "say", "saying", "says", "sec", "section", "see", "seeing", "seem", "seemed", "seeming", "seems", "seen", "self", "selves", "sent", "seven", "several", "shall", "shed", "shes", "show", "showed", "shown", "showns", "shows", "significant", "significantly", "similar", "similarly", "since", "six", "slightly", "somebody", "somehow", "someone", "somethan", "something", "sometime", "sometimes", "somewhat", "somewhere", "soon", "sorry", "specifically", "specified", "specify", "specifying", "still", "stop", "strongly", "sub", "substantially", "successfully", "sufficiently", "suggest", "sup", "sure", "take", "taken", "taking", "tell", "tends", "th", "thank", "thanks", "thanx", "thats", "that've", "thence", "thereafter", "thereby", "thered", "therefore", "therein", "there'll", "therere", "theres", "thereto", "thereupon", "there've", "theyd", "theyre", "think", "thou", "though", "thoughh", "thousand", "throug", "throughout", "thru", "thus", "til", "tip", "together", "took", "toward", "towards", "tried", "tries", "truly", "try", "trying", "ts", "twice", "two", "u", "un", "unfortunately", "unless", "unlike", "unlikely", "unto", "upon", "ups", "us", "use", "used", "useful", "usefully", "usefulness", "uses", "using", "usually", "v", "value", "various", "'ve", "via", "viz", "vol", "vols", "vs", "w", "want", "wants", "wasnt", "way", "wed", "welcome", "went", "werent", "whatever", "what'll", "whats", "whence", "whenever", "whereafter", "whereas", "whereby", "wherein", "wheres", "whereupon", "wherever", "whether", "whim", "whither", "whod", "whoever", "whole", "who'll", "whomever", "whos", "whose", "widely", "willing", "wish", "within", "without", "wont", "words",
    "world", "wouldnt", "www", "x", "yes", "yet", "youd", "youre", "z", "zero"
    /* Add more common words here */
];

// Store deleted keywords and their positions for undo
let deletedKeywords = [];

// Declare sortedKeywords as a global variable
let sortedKeywords = [];

let resumeWords

// Function to remove all types of punctuation from a word
function removePunctuation(word) {
    return word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()'"“”‘’]/g, "").replace(/"/g, "");
}

// Function to calculate total percent match and update UI
function updateMatchPercentage() {
    const jobListingWords = jobListingText.split(/\s+/).map(word => removePunctuation(word));
    resumeWords = resumeText.split(/\s+/).map(word => removePunctuation(word));

    const jobKeywords = jobListingWords.filter(word => !commonWords.includes(word));

    const keywordFrequency = {};
    jobKeywords.forEach(word => {
        const frequency = resumeWords.filter(resumeWord => resumeWord === word).length;
        keywordFrequency[word] = frequency;
    });

    const totalKeywords = Object.keys(keywordFrequency).length;
    const matchedKeywords = Object.values(keywordFrequency).filter(freq => freq > 0).length;

    const matchPercentage = (matchedKeywords / totalKeywords) * 100;

    const matchMetric = document.getElementById("match-metric");
    matchMetric.textContent = `Total Match: ${matchPercentage.toFixed(2)}%`;
}

// Function to extract keywords and update UI
function updateKeywords() {
    jobListingText = document.getElementById("job-listing-textbox").value.toLowerCase();
    resumeText = document.getElementById("resume-textbox").value.toLowerCase();

    const jobListingWords = jobListingText.split(/\s+/).map(word => removePunctuation(word));
    const resumeWords = resumeText.split(/\s+/).map(word => removePunctuation(word));

    const jobKeywords = jobListingWords.filter(word => !commonWords.includes(word));

    const keywordFrequency = {};
    jobKeywords.forEach(word => {
        const frequency = resumeWords.filter(resumeWord => resumeWord === word).length;
        keywordFrequency[word] = frequency;
    });

    sortedKeywords = Object.keys(keywordFrequency).sort((a, b) => keywordFrequency[b] - keywordFrequency[a]);

    const keywordList = document.getElementById("keyword-list");
    keywordList.innerHTML = "";

    sortedKeywords.forEach((keyword, index) => {
        const frequency = keywordFrequency[keyword];
        const listItem = document.createElement("li");

        // Create a delete button for each keyword
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "x";
        deleteButton.classList.add("delete-button");

        // Handle deletion and undo
        deleteButton.addEventListener("click", () => {
            // Remove the keyword from the list
            keywordList.removeChild(listItem);

            // Store the deleted keyword and its position for undo
            deletedKeywords.push({ keyword, index });

            // Calculate and update the match percentage after deletion
            updateMatchPercentage();
        });

        


        listItem.textContent = `${index + 1}. ${keyword} (${frequency}x)`;

        // Append the delete button to the list item
        listItem.appendChild(deleteButton);

        const color = calculateColor(frequency);
        listItem.style.backgroundColor = color;

        // keywordList.appendChild(listItem);
        keywordList.insertBefore(listItem, keywordList.firstChild);
    });

    // Calculate and update the total match percentage
    updateMatchPercentage();
}

// Function to undo deleting keywords
function undoDeletion(sortedKeywords) {
    if (deletedKeywords.length > 0) {
        const { keyword, index } = deletedKeywords.pop();

        // Reinsert the deleted keyword at its original position
        sortedKeywords.splice(index, 0, keyword);

        // Recalculate the keyword frequency
        const keywordFrequency = {};
        sortedKeywords.forEach(word => {
            const frequency = resumeWords.filter(resumeWord => resumeWord === word).length;
            keywordFrequency[word] = frequency;
        });

        // Update the keyword list with the reinserted keyword
        const keywordList = document.getElementById("keyword-list");
        keywordList.innerHTML = "";

        sortedKeywords.forEach((sortedKeyword, newIndex) => {
            const frequency = keywordFrequency[sortedKeyword];

            // Define the createKeywordListItem function here
            function createKeywordListItem(keyword, frequency, keywordList, sortedKeywords, newIndex) {
                const listItem = document.createElement("li");

                // Create a delete button for each keyword
                const deleteButton = document.createElement("button");
                deleteButton.textContent = "x";
                deleteButton.classList.add("delete-button");

                // Handle deletion and undo
                deleteButton.addEventListener("click", () => {
                    // Remove the keyword from the list
                    keywordList.removeChild(listItem);

                    // Store the deleted keyword and its position for undo
                    deletedKeywords.push({ keyword, index });

                    // Calculate and update the match percentage after deletion
                    updateMatchPercentage();
                });

                listItem.textContent = `${newIndex + 1}. ${sortedKeyword} (${frequency}x)`;

                // Append the delete button to the list item
                listItem.appendChild(deleteButton);

                const color = calculateColor(frequency);
                listItem.style.backgroundColor = color;

                // Append the list item to the keyword list
                keywordList.appendChild(listItem);
            }
            
            createKeywordListItem(sortedKeyword, frequency, keywordList, sortedKeywords, newIndex); // Pass sortedKeywords here
        });

        // Calculate and update the match percentage
        updateMatchPercentage();
    }
}
// Function to calculate background color based on frequency (gradient)
function calculateColor(frequency) {
    const maxFrequency = 4;
    const minRed = 255;
    const maxBlue = 255;
    const minBlue = 0;

    const clippedFrequency = Math.min(Math.max(frequency, 0), maxFrequency);

    const redValue = minRed;
    const blueValue = minBlue + (maxBlue - minBlue) * (clippedFrequency / maxFrequency);

    return `rgb(${redValue}, 0, ${blueValue})`;
}

// Function to save the current session
function saveSession() {
    localStorage.setItem("jobListingText", jobListingText);
    localStorage.setItem("resumeText", resumeText);
}

// Function to restore the saved session
function restoreSession() {
    const savedJobListingText = localStorage.getItem("jobListingText");
    const savedResumeText = localStorage.getItem("resumeText");

    if (savedJobListingText && savedResumeText) {
        jobListingText = savedJobListingText;
        resumeText = savedResumeText;

        document.getElementById("job-listing-textbox").value = jobListingText;
        document.getElementById("resume-textbox").value = resumeText;

        updateKeywords();
        updateMatchPercentage();
    }
}

// Function to highlight keywords in the resume text
function highlightKeywordsInResume() {
    const resumeTextbox = document.getElementById("resume-textbox");
    const wordCountElement = document.getElementById("word-count");

    const resumeText = resumeTextbox.value.toLowerCase();

    const wordCount = resumeText.trim().split(/\s+/).filter(word => word !== "").length;

    wordCountElement.textContent = `Word Count: ${wordCount}`;

    jobListingText = jobListingText.toLowerCase();

    const jobKeywords = jobListingText.split(/\s+/).map(word => removePunctuation(word));

    // Create a regular expression pattern to match the keywords
    const keywordPattern = new RegExp(`\\b(${jobKeywords.join("|")})\\b`, "gi");

    // Use the pattern to find and highlight keywords in the resume text
    const highlightedResumeText = resumeText.replace(keywordPattern, '<span class="highlighted">$&</span>');

    // Set the innerHTML of the resume textbox with the highlighted text
    resumeTextbox.innerHTML = highlightedResumeText;
}

// Add event listeners to text boxes for real-time updates
const jobListingTextbox = document.getElementById("job-listing-textbox");
jobListingTextbox.addEventListener("input", () => {
    updateKeywords();
    updateMatchPercentage();
    highlightKeywordsInResume(); // Highlight keywords in resume
    saveSession(); // Save session on input change
});

const resumeTextbox = document.getElementById("resume-textbox");
resumeTextbox.addEventListener("input", () => {
    updateKeywords();
    updateMatchPercentage();
    highlightKeywordsInResume();
    saveSession(); // Save session on input change
});

// Add event listener for the "Restore Session" button
const restoreButton = document.getElementById("restore-button");
restoreButton.addEventListener("click", () => {
    restoreSession();
});

// Add event listener for the "Undo" button
const undoButton = document.getElementById("undo-button");
undoButton.addEventListener("click", () => {
    undoDeletion(sortedKeywords); // Pass sortedKeywords here
});
// Initial update when the page loads
restoreSession();
highlightKeywordsInResume(); // Highlight keywords in resume
