const shuffleArray = <T>(arr: T[]): T[] => {
    return [...arr].sort(() => Math.random() - 0.5)
}
export default shuffleArray;