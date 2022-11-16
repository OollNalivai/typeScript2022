class User {
    skills: string[] = [];

    addSkill(skill: string);
    addSkill(skill: string[]);
    addSkill(skillOrSkills: string | string[]): void {
        if (typeof skillOrSkills === 'string') {
            this.skills.push(skillOrSkills);

            console.log(this.skills)
        } else {
            this.skills.push(...skillOrSkills)

            console.log('string[]', this.skills)
        }
    }
}

const a = new User().addSkill('asdasd');
const b = new User().addSkill(['111111', 'asdasd']);
