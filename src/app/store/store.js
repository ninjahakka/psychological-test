import { create } from 'zustand'

// 建立 store hook
const usePsyStore = create((set) => ({
    // states and actions
    state: 0, //0:start, 1:question, 2:displayResult, 3: result
    questionState: 0,
    totalQuestions: 5,
    score: 0,
    updateState: (newState) => set ( (state) => ({state: newState}) ),
    updateQuestionState: (newState) => set ( (state) => ({questionState: newState}) ),
    updateTotalQuestionState: (newState) => set ( (state) => ({totalQuestions: newState}) ),
    updateScore: (newState) => set ( (state) => ({score: newState}) ),
}))


const useQuestionStore = create((set) => ({
    questions: {
        1:{
            title:"當有一名(不懷好意的)玩家經過，你會有什麼反應？",
            options :[
                {title:"你侵犯到我的領域了！準備接受我的制裁吧", value: 3},
                {title:"用「不懷好意」的眼神打量回去", value: 2},
                {title:"玩家？什麼玩家？可以吃嗎？（繼續跑來跑去）", value: 1}
            ]
        },
        2:{
            title:"承上題，這名玩家居然攻擊你了！你該做何反應？",
            options :[
                {title:"不是，哥們，我們之前應該不認識吧？應該是無怨無仇齁！？歸剛欸！", value: 1},
                {title:"你真的惹毛我了。開始向你所信仰的上帝祈禱吧，因為我不會停下來，直到你去見上帝。", value: 2},
                {title:"Say no more，一定是我先打的他（繼續捶）", value: 3}
            ]
        },
        3:{
            title:"可以分享一下你的夢想嗎？",
            options :[
                {title:"我的夢想是無憂無慮躺在草地上，欣賞落日的餘暉", value: 1},
                {title:"我的夢想是照顧好我的家人朋友", value: 2},
                {title:"我的夢想是成為世界最強！", value: 3}
            ]
        },
        4:{
            title:"你對於愛的期待是？",
            options :[
                {title:"我渴望一個靈魂契合的夥伴陪我面對這個世界", value: 2},
                {title:"2025，沒有愛", value: 3},
                {title:"我愛人人，人人愛我", value: 1}
            ]
        },
        5:{
            title:"你如何看待「幼年生物」？",
            options :[
                {title:"噢天哪，世界因你們的存在而美好。你說對不對呀，小可愛？（捏臉）", value: 1},
                {title:"我還好，看看還行，不要黏著我就好", value: 2},
                {title:"ㄧㄜˊ，這些又小又跑來跑去的是什麼鬼東西！", value: 3}
            ]
        }
    },
}))


export { usePsyStore , useQuestionStore}