trigger accFirst on Account (before update) {

    List<Account> acountList = new List<Account>();
    for(Account objAccount : trigger.new){
        objAccount.Description = objAccount.Name;
    }
   
}