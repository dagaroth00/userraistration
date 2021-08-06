export class UserQualification {
    constructor(
        public avgpercentage: number,
        public yearOfPassing : number,
        public qualification : String,
        public stream : String,
        public college : String,
        public collegeLocation: String,
        public accountType: String,
        public yearsOfExp : number,
        public currentctc : number,
        public expectedctc : number,
         public techExpIn :[
            js: boolean,
            anuglarjs: boolean,
            react: boolean,
            nodejs: boolean,
            other: boolean
        ],
         public techfamiwith :[
            js: boolean,
            anuglarjs: boolean,
            react: boolean,
            nodejs: boolean,
            other: boolean
        ],


    ){}

}
