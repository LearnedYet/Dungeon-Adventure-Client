import { ComponentResizeConfig } from '../component/Component';

export const USER_CLASSES: string[] = [
    'warrior',
    'barbarian',
    'mage',
    'ranger',
];

export const BASE_UNIT_DESCRIPTIONS: { [key: string]: any } = {
    warrior: {
        name: "战士",
        code: "warrior",
        description: "出身贵族精英的严谨战士，精通剑与盾。围城与残破战旗的苦涩记忆始终伴随着他；纵使帝国在脚下腐朽，他依然岿然不动。",
        stats: {
            progress: {
                level: 1
            },
            baseAttributes: {
                health: 75,
                stamina: 75,
                mana: 0,
                actionPoints: 9
            },
            attributes: {
                strength: 8,
                physique: 8,
                agility: 3,
                endurance: 7,
                intelligence: 2,
                initiative: 2,
                luck: 5
            },
            resistance: {
                stabbing: 5,
                cutting: 5,
                crushing: 5,
                fire: 0,
                cold: 0,
                lightning: 0,
                acid: 0,
                poison: 0,
                exhaustion: 3,
                manaDrain: 0,
                bleeding: 3,
                fear: 5,
                curse: 2,
                madness: 2
            },
        },
        inventory: {
            descriptor: [
                {
                    code: "fist-01"
                },
                {
                    code: "sword-01",
                },
                {
                    code: "rag-armor-01",
                },
                {
                    code: "health-potion-01",
                    quantity: 5
                },
                {
                    code: "stamina-potion-01",
                    quantity: 5
                },
                {
                    code: "provision-ham-01",
                    quantity: 5
                }
            ]
        },
    },
    barbarian: {
        name: "野蛮人",
        code: "barbarian",
        description: "来自冰封荒原的魁梧勇士，挥斧之时怒火相随。他伤痕累累而又不屈，如风暴般前行；每次挥击都像为陷落城堡敲响丧钟，笑声中满是铁与霜的气息。",
        stats: {
            progress: {
                level: 1
            },
            baseAttributes: {
                health: 80,
                stamina: 80,
                mana: 0,
                actionPoints: 9
            },
            attributes: {
                strength: 10,
                physique: 8,
                agility: 2,
                endurance: 10,
                intelligence: 0,
                initiative: 0,
                luck: 5
            },
            resistance: {
                stabbing: 5,
                cutting: 5,
                crushing: 5,
                fire: 0,
                cold: 8,
                lightning: 0,
                acid: 0,
                poison: 0,
                exhaustion: 5,
                manaDrain: 0,
                bleeding: 2,
                fear: 5,
                curse: 0,
                madness: 0
            },
        },
        inventory: {
            descriptor: [
                {
                    code: "fist-01"
                },
                {
                    code: "axe-01",
                },
                {
                    code: "rag-armor-01",
                },
                {
                    code: "health-potion-01",
                    quantity: 5
                },
                {
                    code: "stamina-potion-01",
                    quantity: 3
                },
                {
                    code: "provision-ham-01",
                    quantity: 3
                }
            ]
        },
    },
    ranger: {
        name: "游侠",
        code: "ranger",
        description: "身手敏捷的荒野射手，弓与利刃皆可致命。幽寂森林和月下足迹萦绕心头；他如烟雾般穿行于残木之间，每一箭都是对黑暗无声而干脆的裁决。",
        stats: {
            progress: {
                level: 1
            },
            baseAttributes: {
                health: 50,
                stamina: 50,
                mana: 0,
                actionPoints: 9
            },
            attributes: {
                strength: 5,
                physique: 5,
                agility: 8,
                endurance: 5,
                intelligence: 2,
                initiative: 7,
                luck: 5
            },
            resistance: {
                stabbing: 5,
                cutting: 5,
                crushing: 5,
                fire: 0,
                cold: 0,
                lightning: 0,
                acid: 0,
                poison: 5,
                exhaustion: 0,
                manaDrain: 0,
                bleeding: 5,
                fear: 0,
                curse: 0,
                madness: 0
            },
        },
        inventory: {
            descriptor: [
                {
                    code: "fist-01"
                },
                {
                    code: "bow-01",
                },
                {
                    code: "dagger-01"
                },
                {
                    code: "arrow-01",
                    quantity: 30
                },
                {
                    code: "rag-armor-01",
                },
                {
                    code: "health-potion-01",
                    quantity: 5
                },
                {
                    code: "stamina-potion-01",
                    quantity: 5
                },
                {
                    code: "provision-ham-01",
                    quantity: 3
                }
            ]
        },

    },
    mage: {
        name: "法师",
        code: "mage",
        description: "学识渊博的施法者，驾驭奥术，使魔法服从自己的意志。他守护灰黑古籍与禁忌符文，以温暖换取洞见，将冰冷星辰引入凡人血肉，只为听清噩梦的低语。",
        stats: {
            progress: {
                level: 1
            },
            baseAttributes: {
                health: 50,
                stamina: 50,
                mana: 75,
                actionPoints: 9
            },
            attributes: {
                strength: 2,
                physique: 2,
                agility: 5,
                endurance: 3,
                intelligence: 8,
                initiative: 8,
                luck: 8
            },
            resistance: {
                stabbing: 0,
                cutting: 0,
                crushing: 0,
                fire: 5,
                cold: 5,
                lightning: 5,
                acid: 0,
                poison: 0,
                exhaustion: 0,
                manaDrain: 5,
                bleeding: 0,
                fear: 0,
                curse: 5,
                madness: 5
            },
        },
        inventory: {
            descriptor: [
                {
                    code: "fist-01"
                },
                {
                    code: "sorcerer-staff-01",
                },
                {
                    code: "fire-charge-01",
                    quantity: 30,
                },
                {
                    code: "plasma-touch-01"
                },
                {
                    code: "rag-armor-01",
                },
                {
                    code: "health-potion-01",
                    quantity: 3
                },
                {
                    code: "mana-potion-01",
                    quantity: 5
                },
                {
                    code: "provision-wine-01",
                    quantity: 3
                },
                {
                    code: "provision-ham-01",
                    quantity: 3
                },
            ]
        },
    },
    "villager-01": {
        name: "村民",
        code: "villager-01",
        class: "opportunist",
        description: "他曾是普通村民，如今却怀着对危险莫名的渴望，徘徊于阴暗道路。丰收之月照见了他饱经风霜外表下躁动的灵魂，而他正回应废弃城堡与染血交易的召唤。",
        stats: {
            progress: {
                level: 1
            },
            baseAttributes: {
                health: 75,
                stamina: 75,
                actionPoints: 9
            },
            attributes: {
                strength: 6,
                physique: 5,
                agility: 3,
                endurance: 5,
                intelligence: 1,
                initiative: 3,
                luck: 5
            },
            resistance: {
                stabbing: 0,
                cutting: 0,
                crushing: 0,
                fire: 0,
                cold: 0,
                lightning: 0,
                acid: 0,
                poison: 0,
                exhaustion: 0,
                manaDrain: 0,
                bleeding: 0,
                fear: 0,
                curse: 0,
                madness: 0
            }
        }
    },
    "soldier-01": {
        name: "士兵",
        code: "soldier-01",
        class: "opportunist",
        description: "他曾是骄傲的皇家卫兵，却在无数追猎地狱怪物的黑夜中遍体鳞伤、心生苦涩。他的剑仍记得侍奉国王时的纪律；他的目光则凝聚着直视深渊也不肯退缩的冷峻决心。",
        stats: {
            progress: {
                level: 5
            },
            baseAttributes: {
                health: 120,
                stamina: 100,
                actionPoints: 10
            },
            attributes: {
                strength: 10,
                physique: 10,
                agility: 7,
                endurance: 12,
                intelligence: 4,
                initiative: 4,
                luck: 5
            },
            resistance: {
                stabbing: 5,
                cutting: 5,
                crushing: 5,
                fire: 0,
                cold: 0,
                lightning: 0,
                acid: 0,
                poison: 0,
                exhaustion: 3,
                manaDrain: 0,
                bleeding: 3,
                fear: 5,
                curse: 2,
                madness: 2
            }
        }
    },
    "knight-01": {
        name: "骑士",
        code: "knight-01",
        class: "opportunist",
        booty: {},
        achievements: {},
        quests: {},
        description: "他曾是公主的贴身护卫，如今背负失败与烈火的阴影，化作受往事折磨的复仇者。誓言已铸成冰冷利刃；他潜行于阴影，寻求巨龙之血，也寻求自己受诅灵魂的救赎。",
        stats: {
            progress: {
                level: 10
            },
            baseAttributes: {
                health: 180,
                stamina: 150,
                actionPoints: 9
            },
            attributes: {
                strength: 18,
                physique: 15,
                agility: 12,
                endurance: 16,
                intelligence: 9,
                initiative: 11,
                luck: 5
            },
            resistance: {
                stabbing: 7,
                cutting: 7,
                crushing: 7,
                fire: 4,
                cold: 4,
                lightning: 4,
                acid: 0,
                poison: 4,
                exhaustion: 7,
                manaDrain: 0,
                bleeding: 7,
                fear: 10,
                curse: 10,
                madness: 10
            }
        }
    }
};

export const SCENARIO_IDS = {
    TRAINING: 'scenario-training',
}

export const ACHIEVEMENT_IDS = {
    TRAINING_COMPLETED: 'training-completed',
    FIRST_BLOOD: 'first-blood',
}

export const QUEST_IDS = {
    QUEST_TRAINING: 'quest-training',
}


export const RESIZE_CONFIG: ComponentResizeConfig = {
    contentHeight: 680,
    contentWidth: 1100,
    maxScale: 2,
    minScale: 1,
}