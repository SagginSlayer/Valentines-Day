body {
    background-color: #ffe6e6;
    font-family: 'Comic Sans MS', cursive, sans-serif;
    text-align: center;
    height: 100vh;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
}

h1 {
    color: #ff66b2;
    font-size: 3em;
    margin-bottom: 60px;
    animation: bounceIn 1s ease-out;
}

#yes-button, #no-button {
    font-size: 1.8em;
    padding: 15px 40px;
    margin: 20px;
    cursor: pointer;
    border: none;
    border-radius: 50px;
    background-color: #ff66b2;
    color: white;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
}

#yes-button:hover, #no-button:hover {
    transform: scale(1.2);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
}

#no-button {
    position: absolute;
    transition: transform 0.4s ease-in-out;
}

.grow {
    animation: growButton 1s ease-out forwards;
}

@keyframes bounceIn {
    0% { transform: translateY(-1000px); opacity: 0; }
    60% { transform: translateY(30px); opacity: 1; }
    100% { transform: translateY(0); }
}

@keyframes growButton {
    0% { transform: scale(1); }
    100% { transform: scale(10); }
}

@keyframes heartBeat {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
}

