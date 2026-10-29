export enum GameTipKey {
    MAIN_HUB = 'tip_main_hub',
    COMBAT_PHASE = 'tip_combat_phase',
    START_TRAINING_QUEST = 'tip_start_training_quest',
    RESOLVE_TRAINING_QUEST = 'tip_resolve_training_quest',
    REPLENISH_SUPPLIES = 'tip_replenish_supplies',
    MANAGE_INVENTORY = 'tip_manage_inventory',
    BROKEN_GEAR = 'tip_broken_gear',
    WAIT_SKIP = 'tip_wait_skip',
    CLOSE_COMBAT_WARRIOR = 'tip_close_combat_warrior',
    CLOSE_COMBAT_BARBARIAN = 'tip_close_combat_barbarian',
    CLOSE_COMBAT_MAGE = 'tip_close_combat_mage',
    CLOSE_COMBAT_RANGER = 'tip_close_combat_ranger',
    RANGE_COMBAT_WARRIOR = 'tip_range_combat_warrior',
    RANGE_COMBAT_BARBARIAN = 'tip_range_combat_barbarian',
    RANGE_COMBAT_MAGE = 'tip_range_combat_mage',
    RANGE_COMBAT_RANGER = 'tip_range_combat_ranger',
    LOW_HEALTH = 'tip_low_health',
    LOW_STAMINA = 'tip_low_stamina',
    LOW_MANA = 'tip_low_mana',
    NO_STAMINA = 'tip_no_stamina',
    ARMOR_PROTECTION = 'tip_armor_protection',
    STUNNED = 'tip_stunned',
    BLEADING = 'tip_bleading',
    POISONED = 'tip_poisoned',
    STRESSED = 'tip_stressed',
    DEFEATED = 'tip_defeated',
    LOBBY = 'tip_lobby',
    MERCENARY = 'tip_mercenary',
    LEVEL_UP = 'tip_level_up',
    CONSUME_PROVISION_HEALTH = 'tip_consume_provision_health',
    CONSUME_PROVISION_MANA = 'tip_consume_provision_mana',
    CONSUME_PROVISION_STRESS = 'tip_consume_provision_stress',
}

export function closeCombatTip(clazz: string): GameTipKey {
    return ('tip_close_combat_' + clazz) as GameTipKey;
}

export function rangeCombatTip(clazz: string): GameTipKey {
    return ('tip_range_combat_' + clazz) as GameTipKey;
}

export const GAME_TIPS: { [key in GameTipKey]?: string } = {
    [GameTipKey.MAIN_HUB]: `
        <span style="margin-left: 8px;">左侧是角色面板。悬停或右键点击可查看详细信息。</span><br>
        <img src="./assets/icons/armory-gear.png" style="vertical-align: middle; padding-bottom: 4px; width: 22px; margin-top: 6px;" />
        你可以在右侧商店购买物品。<br>
        <img src="./assets/icons/backpack.png" style="height:24px; vertical-align: middle; padding-bottom: 4px;" />
        你可以在下方背包中管理装备。<br>
        <img src="./assets/icons/warning.png" style="height:24px; vertical-align: middle; padding-bottom: 4px;" />
        打开顶部的任务菜单，领取当前任务。<div>
        <span style="margin-left: 8px;">点击屏幕顶部的“游戏规则”按钮，阅读游戏规则。</span>`,
    [GameTipKey.COMBAT_PHASE]: `
        欢迎你，冒险者！这是你的教学任务。<br>
        你需要摧毁所有训练假人。<br>
        请按照上方战斗阶段说明中的指引操作。`,
    [GameTipKey.START_TRAINING_QUEST]: `
        现在可以开始训练了。<br>
        点击右上角的“训练”按钮。`,
    [GameTipKey.RESOLVE_TRAINING_QUEST]: `
        <img src="./assets/icons/warning.png" style="height:24px; vertical-align: middle; padding-bottom: 4px;" />
        打开顶部的任务菜单，交付训练任务。`,
    [GameTipKey.REPLENISH_SUPPLIES]: `
        <img src="./assets/icons/health-potion-01.png" style="vertical-align: middle; height: 32px; padding-bottom: 4px;" />
        <img src="./assets/icons/stamina-potion-01.png" style="vertical-align: middle; height: 32px; padding-bottom: 4px;" />
        <img src="./assets/icons/mana-potion-01.png" style="vertical-align: middle; height: 32px; padding-bottom: 4px;" />
        <img src="./assets/icons/antidote-potion-01.png" style="vertical-align: middle; height: 32px; padding-bottom: 4px;" />
        <img src="./assets/icons/bandage-01.png" style="vertical-align: middle; height: 32px; padding-bottom: 4px;" />
        <img src="./assets/icons/fire-charge-01.png" style="vertical-align: middle; height: 32px; padding-bottom: 4px;" />
        <img src="./assets/icons/arrow-01.png" style="vertical-align: middle; height: 32px; padding-bottom: 4px;" />
        <img src="./assets/icons/provision-ham-01.png" style="vertical-align: middle; height: 32px; padding-bottom: 4px;" />
        <img src="./assets/icons/provision-wine-01.png" style="vertical-align: middle; height: 32px; padding-bottom: 4px;" />
        <img src="./assets/icons/provision-beer-01.png" style="vertical-align: middle; height: 32px; padding-bottom: 4px;" />
        <img src="./assets/icons/helmet-01.png" style="vertical-align: middle; height: 32px; padding-bottom: 4px;" />
        <img src="./assets/icons/basic-armor-01.png" style="vertical-align: middle; height: 32px; padding-bottom: 4px;" />
        <img src="./assets/icons/boots-01.png" style="vertical-align: middle; height: 32px; padding-bottom: 4px;" />
        <img src="./assets/icons/gloves-01.png" style="vertical-align: middle; height: 32px; padding-bottom: 4px;" />
        <br>
        别忘了补充药水、弹药和食物。<br>
        进入地下城之前，你可能需要更好的装备。`,
    [GameTipKey.MANAGE_INVENTORY]: `
        <img src="./assets/icons/backpack.png" style="height:24px; vertical-align: middle; padding-bottom: 4px;" />
        别忘了把武器和护甲装备到对应栏位。<br>
        当物品旁显示以下图标时
        <img src="./assets/icons/slot-weapon.png"
                style="vertical-align: middle; padding-bottom: 4px; width: 16px;">
            <img src="./assets/icons/slot-head.png"
                style="vertical-align: middle; padding-bottom: 4px; width: 16px;">
            <img src="./assets/icons/slot-body.png"
                style="vertical-align: middle; padding-bottom: 4px; width: 16px;">
            <img src="./assets/icons/slot-hand.png"
                style="vertical-align: middle; padding-bottom: 4px; width: 16px;">
            <img src="./assets/icons/slot-leg.png"
                style="vertical-align: middle; padding-bottom: 4px; width: 16px;">
            <img src="./assets/icons/slot-neck.png"
                style="vertical-align: middle; padding-bottom: 4px; width: 16px;">
        ，表示该物品已经装备。`,
    [GameTipKey.CLOSE_COMBAT_WARRIOR]: `
        <img src="./assets/icons/sword-01.png" style="vertical-align: middle; height: 40px;">
        选择近战武器（<span class="orange-text" style="padding: 0;">选中后应显示橙色光效</span>），攻击相邻列的目标。<br>
        <span style="margin-left: 42px;">它必须装备在武器栏位 <img src="./assets/icons/slot-weapon.png"
            style="vertical-align: middle; padding-bottom: 4px; width: 16px;"> 中。</span><br>
        <img src="./assets/icons/close-range.png" style="vertical-align: middle; height: 32px; margin-top: 2px;">
        你可以攻击任意<span class="green-text" style="padding: 0;">绿色</span>格子，出发位置可以是任意<span class="purple-text text-lighten-1" style="padding: 0;">紫色</span>格子。`,
    [GameTipKey.CLOSE_COMBAT_BARBARIAN]: `
        <img src="./assets/icons/axe-01.png" style="vertical-align: middle; height: 40px;">
        选择近战武器（<span class="orange-text" style="padding: 0;">选中后应显示橙色光效</span>），攻击相邻列的目标。<br>
        <span style="margin-left: 42px;">它必须装备在武器栏位 <img src="./assets/icons/slot-weapon-2.png"
            style="vertical-align: middle; padding-bottom: 4px; width: 16px;"> 中。</span><br>
        <img src="./assets/icons/close-range.png" style="vertical-align: middle; height: 32px; margin-top: 2px;">
        你可以攻击任意<span class="green-text" style="padding: 0;">绿色</span>格子，出发位置可以是任意<span class="purple-text text-lighten-1" style="padding: 0;">紫色</span>格子。`,
    [GameTipKey.CLOSE_COMBAT_MAGE]: `
        <img src="./assets/icons/plasma-touch-01.png" style="vertical-align: middle; height: 40px;">
        选择近战魔法（<span class="orange-text" style="padding: 0;">选中后应显示橙色光效</span>），攻击相邻列的目标。<br>
        <img src="./assets/icons/close-range.png" style="vertical-align: middle; height: 32px; margin-top: 2px;">
        你可以攻击任意<span class="green-text" style="padding: 0;">绿色</span>格子，出发位置可以是任意<span class="purple-text text-lighten-1" style="padding: 0;">紫色</span>格子。`,
    [GameTipKey.CLOSE_COMBAT_RANGER]: `
        <img src="./assets/icons/dagger-01.png" style="vertical-align: middle; height: 40px;">
        选择近战武器（<span class="orange-text" style="padding: 0;">选中后应显示橙色光效</span>），攻击相邻列的目标。<br>
        <span style="margin-left: 42px;">它必须装备在武器栏位 <img src="./assets/icons/slot-weapon.png"
            style="vertical-align: middle; padding-bottom: 4px; width: 16px;"> 中。</span><br>
        <img src="./assets/icons/close-range.png" style="vertical-align: middle; height: 32px; margin-top: 2px;">
        你可以攻击任意<span class="green-text" style="padding: 0;">绿色</span>格子，出发位置可以是任意<span class="purple-text text-lighten-1" style="padding: 0;">紫色</span>格子。`,
    [GameTipKey.RANGE_COMBAT_MAGE]: `
        <img src="./assets/icons/sorcerer-staff-01.png" style="vertical-align: middle; height: 40px;">
        选择远程武器（<span class="orange-text" style="padding: 0;">选中后应显示橙色光效</span>），攻击相邻列之后的目标。<br>
        <span style="margin-left: 42px;">它必须装备在武器栏位 <img src="./assets/icons/slot-weapon-2.png"
            style="vertical-align: middle; padding-bottom: 4px; width: 16px;"> 中。</span><br>
        <img src="./assets/icons/fire-charge-01.png" style="vertical-align: middle; height: 32px; margin-top: 2px; margin-left: 8px;">
        武器弹药必须装备在弹药栏位 <img src="./assets/icons/slot-ammo.png"
                        style="vertical-align: middle; padding-bottom: 4px; width: 16px;"> 中。<br>
        <img src="./assets/icons/long-range.png" style="vertical-align: middle; height: 32px; margin-top: 2px;">
        你可以攻击任意<span class="green-text" style="padding: 0;">绿色</span>格子，出发位置可以是任意<span class="purple-text text-lighten-1" style="padding: 0;">紫色</span>格子。`,
    [GameTipKey.RANGE_COMBAT_RANGER]: `
        <img src="./assets/icons/bow-01.png" style="vertical-align: middle; height: 40px;">
        选择远程武器（<span class="orange-text" style="padding: 0;">选中后应显示橙色光效</span>），攻击相邻列之后的目标。<br>
        <span style="margin-left: 42px;">它必须装备在武器栏位 <img src="./assets/icons/slot-weapon-2.png"
            style="vertical-align: middle; padding-bottom: 4px; width: 16px;"> 中。</span><br>
        <img src="./assets/icons/arrow-01.png" style="vertical-align: middle; height: 32px; margin-top: 2px; margin-left: 8px;">
        武器弹药必须装备在弹药栏位 <img src="./assets/icons/slot-ammo.png"
                        style="vertical-align: middle; padding-bottom: 4px; width: 16px;"> 中。<br>
        <img src="./assets/icons/long-range.png" style="vertical-align: middle; height: 32px; margin-top: 2px;">
        你可以攻击任意<span class="green-text" style="padding: 0;">绿色</span>格子，出发位置可以是任意<span class="purple-text text-lighten-1" style="padding: 0;">紫色</span>格子。`,
    [GameTipKey.RANGE_COMBAT_WARRIOR]: `
        由于你没有远程武器，需要<br>先让角色靠近远处的目标。`,
    [GameTipKey.RANGE_COMBAT_BARBARIAN]: `
        由于你没有远程武器，需要<br>先让角色靠近远处的目标。`,
    [GameTipKey.LOW_HEALTH]: `
        <span style="margin-left: 8px;">你的生命值较低。</span><br>
        <img src="./assets/icons/health-potion-01.png" style="height:24px; vertical-align: middle; height: 32px;">
        战斗中可以使用生命药水恢复生命值。`,
    [GameTipKey.LOW_STAMINA]: `
        <span style="margin-left: 8px;">你的体力较低，可能无法使用武器。</span><br>
        <img src="./assets/icons/stamina-potion-01.png" style="vertical-align: middle; height: 32px;">
        战斗中可以使用体力药水恢复体力。`,
    [GameTipKey.LOW_MANA]: `
        <span style="margin-left: 8px;">你的法力较低，可能无法使用魔法和魔法武器。</span><br>
        <img src="./assets/icons/mana-potion-01.png" style="vertical-align: middle; height: 32px;">
        战斗中可以使用法力药水恢复法力。`,
    [GameTipKey.NO_STAMINA]: `
        <img src="./assets/icons/tired.png" style="vertical-align: middle; padding-bottom: 4px; width: 24px; margin: 4px;">
        你的体力已经耗尽。受到的任何伤害都会暴击。`,
    [GameTipKey.ARMOR_PROTECTION]: `
        护甲或盾牌吸收的所有伤害都会消耗角色体力。`,
    [GameTipKey.STUNNED]: `
        <img src="./assets/icons/dizzy.png" style="vertical-align: middle; padding-bottom: 4px; width: 24px; margin: 4px;">
        你的角色已眩晕。受到的任何伤害都会暴击。`,
    [GameTipKey.BROKEN_GEAR]: `
        <img src="./assets/icons/broken.png" style="vertical-align: middle; padding-bottom: 4px; width: 24px; margin: 4px;">
        你的装备已损坏，无法使用。<br>
        从地下城返回后可以修理。`,
    [GameTipKey.STRESSED]: `
        <img src="./assets/icons/stressed.png" style="vertical-align: middle; padding-bottom: 4px; width: 16px; margin: 4px; margin-left: 8px;">
        你的角色压力过高，可能发生不利事件。<br>
       <img src="./assets/icons/stress-potion-01.png" style="vertical-align: middle; padding-bottom: 4px; width: 32px; margin: 4px;">
        可以使用安神药剂降低压力。`,
    [GameTipKey.BLEADING]: `
        <img src="./assets/icons/blood-drop.png" style="vertical-align: middle; padding-bottom: 4px; width: 16px; margin: 4px; margin-left: 8px;">
        你的角色正在流血。<br>
       <img src="./assets/icons/bandage-01.png" style="vertical-align: middle; padding-bottom: 4px; width: 32px; margin: 4px;">
        战斗中可以使用绷带止血。`,
    [GameTipKey.POISONED]: `
        <img src="./assets/icons/poison-drop.png" style="vertical-align: middle; padding-bottom: 4px; width: 16px; margin: 4px; margin-left: 8px;">
        你的角色已中毒。<br>
       <img src="./assets/icons/antidote-potion-01.png" style="vertical-align: middle; padding-bottom: 4px; width: 32px; margin: 4px;">
        战斗中可以使用解毒药治疗中毒。`,
    [GameTipKey.CONSUME_PROVISION_HEALTH]: `
        <img src="./assets/icons/provision-ham-01.png" style="vertical-align: middle; height: 32px;">
        休息阶段可以吃一块火腿恢复生命值。`,
    [GameTipKey.CONSUME_PROVISION_MANA]: `
        <img src="./assets/icons/provision-wine-01.png" style="vertical-align: middle; height: 32px;">
        休息阶段可以喝一瓶葡萄酒恢复法力。`,
    [GameTipKey.CONSUME_PROVISION_STRESS]: `
        <img src="./assets/icons/provision-beer-01.png" style="vertical-align: middle; height: 32px;">
        休息阶段可以喝一杯啤酒降低压力。`,
    [GameTipKey.MERCENARY]: `
        <img src="./assets/icons/villager-01.png" style="vertical-align: middle; height: 32px;">
        你可以雇用一名佣兵，协助冒险。`,
    [GameTipKey.LOBBY]: `
        你可以在这里以队长身份进入地下城。<br>
        在“队伍”选项卡中可以加入其他玩家的队伍。`,
    [GameTipKey.WAIT_SKIP]: `
        点击<span class="green-text text-lighten-1" style="padding: 0;">等待</span>按钮，会将你的行动移至本轮末尾。<br>
        点击<span class="purple-text" style="padding: 0;">结束回合</span>按钮，会直接跳过本次行动。`,
    [GameTipKey.DEFEATED]: `
        <img src="./assets/icons/death.png" style="vertical-align: middle; height: 24px;">英雄已被击败，但死亡也是新的开始。`,
    [GameTipKey.LEVEL_UP]: `
        你的角色可以升级了。<br>点击“升级”按钮，分配属性点。`,
};
