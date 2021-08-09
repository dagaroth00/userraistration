export interface UserQualification {
  
         avgpercentage: number;
         yearOfPassing : number;
         qualification : String;
         stream : String;
         college : String;
         collegeLocation: String;
         accountType: String;
         yearsOfExp : number;
         currentctc : number;
         expectedctc : number;
          techExpIn :[
            js: boolean,
            anuglarjs: boolean,
            react: boolean,
            nodejs: boolean,
            other: boolean
        ];
          techfamiwith :[
            js: boolean,
            anuglarjs: boolean,
            react: boolean,
            nodejs: boolean,
            other: boolean
        ];



}
