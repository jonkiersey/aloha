const multiClickText = (clickCount: number): string | null => {
  if (clickCount < 2) {
    return null;
  }
  if (clickCount === 2) {
    return "I saw that 😏";
  }
  if (clickCount === 3) {
    return "Oh, you're still going";
  }
  if (clickCount === 4) {
    return "Four times? Really?";
  }
  if (clickCount === 5) {
    return "You must really like me!";
  }
  if (clickCount === 6) {
    return "You're persistent!";
  }
  if (clickCount === 7) {
    return "Are you testing me?";
  }
  if (clickCount === 8) {
    return "That's dedication!";
  }
  if (clickCount === 9) {
    return "You're unstoppable!";
  }
  if (clickCount === 10) {
    return "Ten clicks! You're my biggest fan!";
  }
  if (clickCount === 11) {
    return `You've clicked ${clickCount} times! Maybe stop now?`;
  }
  if (clickCount < 20) {
    return `You've clicked ${clickCount} times!`;
  }
  if (clickCount === 20) {
    return "Ok, you win. That's 20, I'm done counting.";
  }
  if (clickCount === 30) {
    return "You're still clicking? 😂";
  }
  if (clickCount === 40) {
    return "You're really committed to this, huh?";
  }
  if (clickCount === 50) {
    return "You know this was supposed to be a real number of people, right?";
  }
  if (clickCount === 100) {
    return "You've clicked 100 times! I promise there are no more messages after this, you're just wasting your time now.";
  }
  if (clickCount > 101 && clickCount < 106) {
    return "🫠";
  }
  return null;
};

export { multiClickText };
