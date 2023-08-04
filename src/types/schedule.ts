
type Result = {
    gameWins: number;
    outcome: 'win' | 'loss';
  }
  
  type Record ={
    losses: number;
    wins: number;
  }
  
  type Team ={
    code: string;
    image: string;
    name: string;
    result?: Result;
    record?: Record;
  }
  
  type Strategy ={
    count: number;
    type: 'bestOf';
  }
  
  type Match ={
    startTime: string;
    blockName: string;
    match: {
      teams: Team[];
      id: string;
      strategy: Strategy;
    };
    state: 'completed' | 'unstarted' | 'inProgress';
    type: 'match' | 'show';
    league: {
      name: string;
      slug: string;
    };
  }
  
  type Pages ={
    older: string;
    newer: string;
  }
  
  type Schedule ={
    updated: string;
    pages: Pages;
    events: Match[];
  }
  


export {Schedule,Pages,Match,Strategy,Team,Record,Result};