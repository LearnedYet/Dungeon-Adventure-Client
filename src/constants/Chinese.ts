// 仅在界面渲染时翻译标签；协议字段、枚举值和原始数据保持不变。
const LABELS: { [key: string]: string } = {
    name: '名称', code: '代码', uid: '编号', unituid: '单位编号', class: '职业',
    health: '生命值', stamina: '体力', mana: '法力', actionpoints: '行动点',
    strength: '力量', physique: '体质', agility: '敏捷', endurance: '耐力',
    intelligence: '智力', initiative: '先攻', luck: '幸运',
    stabbing: '穿刺', cutting: '斩击', crushing: '钝击', fire: '火焰', cold: '寒冷',
    lightning: '闪电', acid: '酸蚀', poison: '中毒', exhaustion: '疲劳',
    manadrain: '法力汲取', bleeding: '流血', fear: '恐惧', curse: '诅咒', madness: '疯狂',
    iscritical: '暴击', iscriticalmiss: '严重失误', withstun: '附带眩晕',
    level: '等级', exp: '经验', experience: '经验', experiencenext: '下级所需经验',
    attributespoints: '属性点', baseattributespoints: '基础属性点',
    progress: '成长', stats: '属性面板', state: '当前状态', baseattributes: '基础属性',
    attributes: '属性', resistance: '抗性', recovery: '恢复', damage: '伤害',
    modification: '属性变化', inventory: '背包', requirements: '使用条件', usecost: '使用消耗',
    price: '价格', purchaseprice: '回收价格', repairprice: '修理费用',
    booty: '战利品', coins: '金币', coin: '金币', ruby: '红宝石', rubies: '红宝石',
    type: '类型', ammo: '弹药', ammunitionkind: '弹药种类', kind: '种类',
    slot: '装备栏位', slots: '占用栏位', slotsnumber: '占用栏位',
    quantity: '数量', equipped: '已装备', canbesold: '可出售', canbethrownaway: '可丢弃',
    wearout: '磨损', durability: '耐久上限', stress: '压力', stunned: '眩晕', isstunned: '眩晕',
    range: '作用距离', spread: '扩散范围', duration: '持续时间', chance: '概率', deviation: '浮动值',
    minimumx: '最小横向距离', maximumx: '最大横向距离', minimumy: '最小纵向距离', maximumy: '最大纵向距离', radius: '半径',
    achievements: '成就', quests: '任务', reward: '奖励', description: '描述',
    kills: '击杀', artifacts: '神器', objectives: '目标',
    instantdamage: '即时伤害', temporaldamage: '持续伤害', instantrecovery: '即时恢复', temporalmodification: '持续效果',
    warrior: '战士', barbarian: '野蛮人', ranger: '游侠', mage: '法师', opportunist: '冒险者',
};

const ENUM_VALUES: { [key: string]: string } = {
    warrior: '战士', barbarian: '野蛮人', ranger: '游侠', rogue: '游荡者', mage: '法师', opportunist: '冒险者',
    armor: '护甲', weapon: '武器', magic: '法术', disposable: '消耗品', ammunition: '弹药', provision: '补给品', none: '无',
    head: '头部', neck: '颈部', body: '身体', hand: '手部', leg: '腿部',
    arrow: '箭矢', magiccharge: '魔法弹药', magiccrystal: '魔法水晶',
    yes: '是', no: '否', true: '是', false: '否',
};

export function localizeLabel(value: string): string {
    const match = /^(.*?)( \d+)?$/.exec(value)!;
    const key = match[1].replace(/\s+/g, '').toLowerCase();
    return Object.prototype.hasOwnProperty.call(LABELS, key) ? LABELS[key] + (match[2] ?? '') : value;
}

export function localizeEnumValue(key: string, value: string): string {
    if (!['class', 'type', 'kind', 'ammo', 'ammunitionKind', 'slot', 'equipped', 'canBeSold', 'stunned', 'isStunned'].includes(key)) {
        return value;
    }
    const normalized = value.toLowerCase();
    return Object.prototype.hasOwnProperty.call(ENUM_VALUES, normalized) ? ENUM_VALUES[normalized] : value;
}
