struct FA{
    int FA_id;
    FA_type;
    string description;
};
struct alphabet{
    int alphabet_id;
    string symbol;
    int FA_id;
};
struct states{
    int states_id;
    int start_state;
    int final_state;
    string state;
};
struct transition{
    int transition_id;
    int FA_id;
    int state_id;
    int alphabet_id;
}