class SubSection{
    constructor(parentSection, subSectionName){
        this.parentSection = parentSection;
        this.subSectionName = subSectionName;
    }

    getParentSection(){
        return this.parentSection;
    }

    getSectionName() {
        return this.subSectionName;
    }

    setParentSection(parentSection){
        this.parentSection = parentSection;
    }

    setSectionName(subSectionName){
        this.subSectionName = subSectionName;
    }
}