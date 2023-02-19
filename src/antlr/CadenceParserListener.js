// Generated from CadenceParser.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by CadenceParser.
function CadenceParserListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

CadenceParserListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
CadenceParserListener.prototype.constructor = CadenceParserListener;

// Enter a parse tree produced by CadenceParser#top_level.
CadenceParserListener.prototype.enterTop_level = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#top_level.
CadenceParserListener.prototype.exitTop_level = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#loop_statement.
CadenceParserListener.prototype.enterLoop_statement = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#loop_statement.
CadenceParserListener.prototype.exitLoop_statement = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#for_in_statement.
CadenceParserListener.prototype.enterFor_in_statement = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#for_in_statement.
CadenceParserListener.prototype.exitFor_in_statement = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#while_statement.
CadenceParserListener.prototype.enterWhile_statement = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#while_statement.
CadenceParserListener.prototype.exitWhile_statement = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#condition_list.
CadenceParserListener.prototype.enterCondition_list = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#condition_list.
CadenceParserListener.prototype.exitCondition_list = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#condition.
CadenceParserListener.prototype.enterCondition = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#condition.
CadenceParserListener.prototype.exitCondition = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#case_condition.
CadenceParserListener.prototype.enterCase_condition = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#case_condition.
CadenceParserListener.prototype.exitCase_condition = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#optional_binding_condition.
CadenceParserListener.prototype.enterOptional_binding_condition = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#optional_binding_condition.
CadenceParserListener.prototype.exitOptional_binding_condition = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#repeat_while_statement.
CadenceParserListener.prototype.enterRepeat_while_statement = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#repeat_while_statement.
CadenceParserListener.prototype.exitRepeat_while_statement = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#branch_statement.
CadenceParserListener.prototype.enterBranch_statement = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#branch_statement.
CadenceParserListener.prototype.exitBranch_statement = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#if_statement.
CadenceParserListener.prototype.enterIf_statement = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#if_statement.
CadenceParserListener.prototype.exitIf_statement = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#else_clause.
CadenceParserListener.prototype.enterElse_clause = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#else_clause.
CadenceParserListener.prototype.exitElse_clause = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#guard_statement.
CadenceParserListener.prototype.enterGuard_statement = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#guard_statement.
CadenceParserListener.prototype.exitGuard_statement = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#switch_statement.
CadenceParserListener.prototype.enterSwitch_statement = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#switch_statement.
CadenceParserListener.prototype.exitSwitch_statement = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#switch_cases.
CadenceParserListener.prototype.enterSwitch_cases = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#switch_cases.
CadenceParserListener.prototype.exitSwitch_cases = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#switch_case.
CadenceParserListener.prototype.enterSwitch_case = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#switch_case.
CadenceParserListener.prototype.exitSwitch_case = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#case_label.
CadenceParserListener.prototype.enterCase_label = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#case_label.
CadenceParserListener.prototype.exitCase_label = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#case_item_list.
CadenceParserListener.prototype.enterCase_item_list = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#case_item_list.
CadenceParserListener.prototype.exitCase_item_list = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#default_label.
CadenceParserListener.prototype.enterDefault_label = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#default_label.
CadenceParserListener.prototype.exitDefault_label = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#where_clause.
CadenceParserListener.prototype.enterWhere_clause = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#where_clause.
CadenceParserListener.prototype.exitWhere_clause = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#where_expression.
CadenceParserListener.prototype.enterWhere_expression = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#where_expression.
CadenceParserListener.prototype.exitWhere_expression = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#labeled_statement.
CadenceParserListener.prototype.enterLabeled_statement = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#labeled_statement.
CadenceParserListener.prototype.exitLabeled_statement = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#statement_label.
CadenceParserListener.prototype.enterStatement_label = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#statement_label.
CadenceParserListener.prototype.exitStatement_label = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#label_name.
CadenceParserListener.prototype.enterLabel_name = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#label_name.
CadenceParserListener.prototype.exitLabel_name = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#control_transfer_statement.
CadenceParserListener.prototype.enterControl_transfer_statement = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#control_transfer_statement.
CadenceParserListener.prototype.exitControl_transfer_statement = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#break_statement.
CadenceParserListener.prototype.enterBreak_statement = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#break_statement.
CadenceParserListener.prototype.exitBreak_statement = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#continue_statement.
CadenceParserListener.prototype.enterContinue_statement = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#continue_statement.
CadenceParserListener.prototype.exitContinue_statement = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#fallthrough_statement.
CadenceParserListener.prototype.enterFallthrough_statement = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#fallthrough_statement.
CadenceParserListener.prototype.exitFallthrough_statement = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#return_statement.
CadenceParserListener.prototype.enterReturn_statement = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#return_statement.
CadenceParserListener.prototype.exitReturn_statement = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#throw_statement.
CadenceParserListener.prototype.enterThrow_statement = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#throw_statement.
CadenceParserListener.prototype.exitThrow_statement = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#do_statement.
CadenceParserListener.prototype.enterDo_statement = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#do_statement.
CadenceParserListener.prototype.exitDo_statement = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#catch_clauses.
CadenceParserListener.prototype.enterCatch_clauses = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#catch_clauses.
CadenceParserListener.prototype.exitCatch_clauses = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#catch_clause.
CadenceParserListener.prototype.enterCatch_clause = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#catch_clause.
CadenceParserListener.prototype.exitCatch_clause = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#catch_pattern_list.
CadenceParserListener.prototype.enterCatch_pattern_list = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#catch_pattern_list.
CadenceParserListener.prototype.exitCatch_pattern_list = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#catch_pattern.
CadenceParserListener.prototype.enterCatch_pattern = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#catch_pattern.
CadenceParserListener.prototype.exitCatch_pattern = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#module_name.
CadenceParserListener.prototype.enterModule_name = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#module_name.
CadenceParserListener.prototype.exitModule_name = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#environment.
CadenceParserListener.prototype.enterEnvironment = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#environment.
CadenceParserListener.prototype.exitEnvironment = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#line_control_statement.
CadenceParserListener.prototype.enterLine_control_statement = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#line_control_statement.
CadenceParserListener.prototype.exitLine_control_statement = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#line_number.
CadenceParserListener.prototype.enterLine_number = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#line_number.
CadenceParserListener.prototype.exitLine_number = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#file_name.
CadenceParserListener.prototype.enterFile_name = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#file_name.
CadenceParserListener.prototype.exitFile_name = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#diagnostic_statement.
CadenceParserListener.prototype.enterDiagnostic_statement = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#diagnostic_statement.
CadenceParserListener.prototype.exitDiagnostic_statement = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#diagnostic_message.
CadenceParserListener.prototype.enterDiagnostic_message = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#diagnostic_message.
CadenceParserListener.prototype.exitDiagnostic_message = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#platform_version.
CadenceParserListener.prototype.enterPlatform_version = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#platform_version.
CadenceParserListener.prototype.exitPlatform_version = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#requirement_list.
CadenceParserListener.prototype.enterRequirement_list = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#requirement_list.
CadenceParserListener.prototype.exitRequirement_list = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#requirement.
CadenceParserListener.prototype.enterRequirement = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#requirement.
CadenceParserListener.prototype.exitRequirement = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#conformance_requirement.
CadenceParserListener.prototype.enterConformance_requirement = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#conformance_requirement.
CadenceParserListener.prototype.exitConformance_requirement = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#same_type_requirement.
CadenceParserListener.prototype.enterSame_type_requirement = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#same_type_requirement.
CadenceParserListener.prototype.exitSame_type_requirement = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#generic_argument_clause.
CadenceParserListener.prototype.enterGeneric_argument_clause = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#generic_argument_clause.
CadenceParserListener.prototype.exitGeneric_argument_clause = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#generic_argument_list.
CadenceParserListener.prototype.enterGeneric_argument_list = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#generic_argument_list.
CadenceParserListener.prototype.exitGeneric_argument_list = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#generic_argument.
CadenceParserListener.prototype.enterGeneric_argument = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#generic_argument.
CadenceParserListener.prototype.exitGeneric_argument = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#access_level_modifier.
CadenceParserListener.prototype.enterAccess_level_modifier = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#access_level_modifier.
CadenceParserListener.prototype.exitAccess_level_modifier = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#declaration.
CadenceParserListener.prototype.enterDeclaration = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#declaration.
CadenceParserListener.prototype.exitDeclaration = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#declarations.
CadenceParserListener.prototype.enterDeclarations = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#declarations.
CadenceParserListener.prototype.exitDeclarations = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#contract_declaration.
CadenceParserListener.prototype.enterContract_declaration = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#contract_declaration.
CadenceParserListener.prototype.exitContract_declaration = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#function_declaration.
CadenceParserListener.prototype.enterFunction_declaration = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#function_declaration.
CadenceParserListener.prototype.exitFunction_declaration = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#function_head.
CadenceParserListener.prototype.enterFunction_head = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#function_head.
CadenceParserListener.prototype.exitFunction_head = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#function_name.
CadenceParserListener.prototype.enterFunction_name = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#function_name.
CadenceParserListener.prototype.exitFunction_name = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#function_signature.
CadenceParserListener.prototype.enterFunction_signature = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#function_signature.
CadenceParserListener.prototype.exitFunction_signature = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#function_result.
CadenceParserListener.prototype.enterFunction_result = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#function_result.
CadenceParserListener.prototype.exitFunction_result = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#function_body.
CadenceParserListener.prototype.enterFunction_body = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#function_body.
CadenceParserListener.prototype.exitFunction_body = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#top_level_declaration.
CadenceParserListener.prototype.enterTop_level_declaration = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#top_level_declaration.
CadenceParserListener.prototype.exitTop_level_declaration = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#code_block.
CadenceParserListener.prototype.enterCode_block = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#code_block.
CadenceParserListener.prototype.exitCode_block = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#import_declaration.
CadenceParserListener.prototype.enterImport_declaration = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#import_declaration.
CadenceParserListener.prototype.exitImport_declaration = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#import_kind.
CadenceParserListener.prototype.enterImport_kind = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#import_kind.
CadenceParserListener.prototype.exitImport_kind = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#import_path.
CadenceParserListener.prototype.enterImport_path = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#import_path.
CadenceParserListener.prototype.exitImport_path = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#import_path_identifier.
CadenceParserListener.prototype.enterImport_path_identifier = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#import_path_identifier.
CadenceParserListener.prototype.exitImport_path_identifier = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#constant_declaration.
CadenceParserListener.prototype.enterConstant_declaration = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#constant_declaration.
CadenceParserListener.prototype.exitConstant_declaration = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#pattern_initializer_list.
CadenceParserListener.prototype.enterPattern_initializer_list = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#pattern_initializer_list.
CadenceParserListener.prototype.exitPattern_initializer_list = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#pattern_initializer.
CadenceParserListener.prototype.enterPattern_initializer = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#pattern_initializer.
CadenceParserListener.prototype.exitPattern_initializer = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#initializer.
CadenceParserListener.prototype.enterInitializer = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#initializer.
CadenceParserListener.prototype.exitInitializer = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#variable_name.
CadenceParserListener.prototype.enterVariable_name = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#variable_name.
CadenceParserListener.prototype.exitVariable_name = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#variable_declaration.
CadenceParserListener.prototype.enterVariable_declaration = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#variable_declaration.
CadenceParserListener.prototype.exitVariable_declaration = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#variable_declaration_head.
CadenceParserListener.prototype.enterVariable_declaration_head = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#variable_declaration_head.
CadenceParserListener.prototype.exitVariable_declaration_head = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#variable.
CadenceParserListener.prototype.enterVariable = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#variable.
CadenceParserListener.prototype.exitVariable = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#resource_variable.
CadenceParserListener.prototype.enterResource_variable = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#resource_variable.
CadenceParserListener.prototype.exitResource_variable = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#local_variable.
CadenceParserListener.prototype.enterLocal_variable = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#local_variable.
CadenceParserListener.prototype.exitLocal_variable = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#initializer_declaration.
CadenceParserListener.prototype.enterInitializer_declaration = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#initializer_declaration.
CadenceParserListener.prototype.exitInitializer_declaration = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#initializer_head.
CadenceParserListener.prototype.enterInitializer_head = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#initializer_head.
CadenceParserListener.prototype.exitInitializer_head = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#initializer_body.
CadenceParserListener.prototype.enterInitializer_body = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#initializer_body.
CadenceParserListener.prototype.exitInitializer_body = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#generic_parameter_clause.
CadenceParserListener.prototype.enterGeneric_parameter_clause = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#generic_parameter_clause.
CadenceParserListener.prototype.exitGeneric_parameter_clause = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#generic_parameter_list.
CadenceParserListener.prototype.enterGeneric_parameter_list = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#generic_parameter_list.
CadenceParserListener.prototype.exitGeneric_parameter_list = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#generic_parameter.
CadenceParserListener.prototype.enterGeneric_parameter = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#generic_parameter.
CadenceParserListener.prototype.exitGeneric_parameter = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#parameter_clause.
CadenceParserListener.prototype.enterParameter_clause = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#parameter_clause.
CadenceParserListener.prototype.exitParameter_clause = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#parameter_list.
CadenceParserListener.prototype.enterParameter_list = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#parameter_list.
CadenceParserListener.prototype.exitParameter_list = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#parameter.
CadenceParserListener.prototype.enterParameter = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#parameter.
CadenceParserListener.prototype.exitParameter = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#statement.
CadenceParserListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#statement.
CadenceParserListener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#statements.
CadenceParserListener.prototype.enterStatements = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#statements.
CadenceParserListener.prototype.exitStatements = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#assignment_statement.
CadenceParserListener.prototype.enterAssignment_statement = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#assignment_statement.
CadenceParserListener.prototype.exitAssignment_statement = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#assignment_operator.
CadenceParserListener.prototype.enterAssignment_operator = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#assignment_operator.
CadenceParserListener.prototype.exitAssignment_operator = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#literal_expression.
CadenceParserListener.prototype.enterLiteral_expression = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#literal_expression.
CadenceParserListener.prototype.exitLiteral_expression = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#array_literal.
CadenceParserListener.prototype.enterArray_literal = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#array_literal.
CadenceParserListener.prototype.exitArray_literal = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#array_literal_items.
CadenceParserListener.prototype.enterArray_literal_items = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#array_literal_items.
CadenceParserListener.prototype.exitArray_literal_items = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#array_literal_item.
CadenceParserListener.prototype.enterArray_literal_item = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#array_literal_item.
CadenceParserListener.prototype.exitArray_literal_item = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#dictionary_literal.
CadenceParserListener.prototype.enterDictionary_literal = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#dictionary_literal.
CadenceParserListener.prototype.exitDictionary_literal = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#dictionary_literal_items.
CadenceParserListener.prototype.enterDictionary_literal_items = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#dictionary_literal_items.
CadenceParserListener.prototype.exitDictionary_literal_items = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#dictionary_literal_item.
CadenceParserListener.prototype.enterDictionary_literal_item = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#dictionary_literal_item.
CadenceParserListener.prototype.exitDictionary_literal_item = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#getter_setter_block.
CadenceParserListener.prototype.enterGetter_setter_block = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#getter_setter_block.
CadenceParserListener.prototype.exitGetter_setter_block = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#getter_clause.
CadenceParserListener.prototype.enterGetter_clause = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#getter_clause.
CadenceParserListener.prototype.exitGetter_clause = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#setter_clause.
CadenceParserListener.prototype.enterSetter_clause = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#setter_clause.
CadenceParserListener.prototype.exitSetter_clause = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#setter_name.
CadenceParserListener.prototype.enterSetter_name = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#setter_name.
CadenceParserListener.prototype.exitSetter_name = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#getter_setter_keyword_block.
CadenceParserListener.prototype.enterGetter_setter_keyword_block = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#getter_setter_keyword_block.
CadenceParserListener.prototype.exitGetter_setter_keyword_block = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#getter_keyword_clause.
CadenceParserListener.prototype.enterGetter_keyword_clause = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#getter_keyword_clause.
CadenceParserListener.prototype.exitGetter_keyword_clause = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#setter_keyword_clause.
CadenceParserListener.prototype.enterSetter_keyword_clause = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#setter_keyword_clause.
CadenceParserListener.prototype.exitSetter_keyword_clause = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#willSet_didSet_block.
CadenceParserListener.prototype.enterWillSet_didSet_block = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#willSet_didSet_block.
CadenceParserListener.prototype.exitWillSet_didSet_block = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#willSet_clause.
CadenceParserListener.prototype.enterWillSet_clause = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#willSet_clause.
CadenceParserListener.prototype.exitWillSet_clause = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#didSet_clause.
CadenceParserListener.prototype.enterDidSet_clause = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#didSet_clause.
CadenceParserListener.prototype.exitDidSet_clause = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#typealias_declaration.
CadenceParserListener.prototype.enterTypealias_declaration = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#typealias_declaration.
CadenceParserListener.prototype.exitTypealias_declaration = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#typealias_name.
CadenceParserListener.prototype.enterTypealias_name = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#typealias_name.
CadenceParserListener.prototype.exitTypealias_name = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#typealias_assignment.
CadenceParserListener.prototype.enterTypealias_assignment = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#typealias_assignment.
CadenceParserListener.prototype.exitTypealias_assignment = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#enum_declaration.
CadenceParserListener.prototype.enterEnum_declaration = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#enum_declaration.
CadenceParserListener.prototype.exitEnum_declaration = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#union_style_enum.
CadenceParserListener.prototype.enterUnion_style_enum = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#union_style_enum.
CadenceParserListener.prototype.exitUnion_style_enum = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#union_style_enum_members.
CadenceParserListener.prototype.enterUnion_style_enum_members = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#union_style_enum_members.
CadenceParserListener.prototype.exitUnion_style_enum_members = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#union_style_enum_member.
CadenceParserListener.prototype.enterUnion_style_enum_member = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#union_style_enum_member.
CadenceParserListener.prototype.exitUnion_style_enum_member = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#union_style_enum_case_clause.
CadenceParserListener.prototype.enterUnion_style_enum_case_clause = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#union_style_enum_case_clause.
CadenceParserListener.prototype.exitUnion_style_enum_case_clause = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#union_style_enum_case_list.
CadenceParserListener.prototype.enterUnion_style_enum_case_list = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#union_style_enum_case_list.
CadenceParserListener.prototype.exitUnion_style_enum_case_list = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#union_style_enum_case.
CadenceParserListener.prototype.enterUnion_style_enum_case = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#union_style_enum_case.
CadenceParserListener.prototype.exitUnion_style_enum_case = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#enum_name.
CadenceParserListener.prototype.enterEnum_name = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#enum_name.
CadenceParserListener.prototype.exitEnum_name = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#enum_case_name.
CadenceParserListener.prototype.enterEnum_case_name = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#enum_case_name.
CadenceParserListener.prototype.exitEnum_case_name = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#raw_value_style_enum.
CadenceParserListener.prototype.enterRaw_value_style_enum = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#raw_value_style_enum.
CadenceParserListener.prototype.exitRaw_value_style_enum = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#raw_value_style_enum_members.
CadenceParserListener.prototype.enterRaw_value_style_enum_members = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#raw_value_style_enum_members.
CadenceParserListener.prototype.exitRaw_value_style_enum_members = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#raw_value_style_enum_member.
CadenceParserListener.prototype.enterRaw_value_style_enum_member = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#raw_value_style_enum_member.
CadenceParserListener.prototype.exitRaw_value_style_enum_member = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#raw_value_style_enum_case_clause.
CadenceParserListener.prototype.enterRaw_value_style_enum_case_clause = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#raw_value_style_enum_case_clause.
CadenceParserListener.prototype.exitRaw_value_style_enum_case_clause = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#raw_value_style_enum_case_list.
CadenceParserListener.prototype.enterRaw_value_style_enum_case_list = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#raw_value_style_enum_case_list.
CadenceParserListener.prototype.exitRaw_value_style_enum_case_list = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#raw_value_style_enum_case.
CadenceParserListener.prototype.enterRaw_value_style_enum_case = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#raw_value_style_enum_case.
CadenceParserListener.prototype.exitRaw_value_style_enum_case = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#raw_value_assignment.
CadenceParserListener.prototype.enterRaw_value_assignment = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#raw_value_assignment.
CadenceParserListener.prototype.exitRaw_value_assignment = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#raw_value_literal.
CadenceParserListener.prototype.enterRaw_value_literal = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#raw_value_literal.
CadenceParserListener.prototype.exitRaw_value_literal = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#struct_declaration.
CadenceParserListener.prototype.enterStruct_declaration = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#struct_declaration.
CadenceParserListener.prototype.exitStruct_declaration = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#struct_name.
CadenceParserListener.prototype.enterStruct_name = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#struct_name.
CadenceParserListener.prototype.exitStruct_name = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#struct_body.
CadenceParserListener.prototype.enterStruct_body = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#struct_body.
CadenceParserListener.prototype.exitStruct_body = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#struct_members.
CadenceParserListener.prototype.enterStruct_members = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#struct_members.
CadenceParserListener.prototype.exitStruct_members = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#struct_member.
CadenceParserListener.prototype.enterStruct_member = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#struct_member.
CadenceParserListener.prototype.exitStruct_member = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#class_declaration.
CadenceParserListener.prototype.enterClass_declaration = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#class_declaration.
CadenceParserListener.prototype.exitClass_declaration = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#class_name.
CadenceParserListener.prototype.enterClass_name = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#class_name.
CadenceParserListener.prototype.exitClass_name = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#class_body.
CadenceParserListener.prototype.enterClass_body = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#class_body.
CadenceParserListener.prototype.exitClass_body = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#class_members.
CadenceParserListener.prototype.enterClass_members = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#class_members.
CadenceParserListener.prototype.exitClass_members = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#class_member.
CadenceParserListener.prototype.enterClass_member = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#class_member.
CadenceParserListener.prototype.exitClass_member = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#protocol_declaration.
CadenceParserListener.prototype.enterProtocol_declaration = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#protocol_declaration.
CadenceParserListener.prototype.exitProtocol_declaration = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#protocol_name.
CadenceParserListener.prototype.enterProtocol_name = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#protocol_name.
CadenceParserListener.prototype.exitProtocol_name = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#protocol_body.
CadenceParserListener.prototype.enterProtocol_body = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#protocol_body.
CadenceParserListener.prototype.exitProtocol_body = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#protocol_members.
CadenceParserListener.prototype.enterProtocol_members = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#protocol_members.
CadenceParserListener.prototype.exitProtocol_members = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#protocol_member.
CadenceParserListener.prototype.enterProtocol_member = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#protocol_member.
CadenceParserListener.prototype.exitProtocol_member = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#protocol_member_declaration.
CadenceParserListener.prototype.enterProtocol_member_declaration = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#protocol_member_declaration.
CadenceParserListener.prototype.exitProtocol_member_declaration = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#protocol_property_declaration.
CadenceParserListener.prototype.enterProtocol_property_declaration = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#protocol_property_declaration.
CadenceParserListener.prototype.exitProtocol_property_declaration = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#protocol_method_declaration.
CadenceParserListener.prototype.enterProtocol_method_declaration = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#protocol_method_declaration.
CadenceParserListener.prototype.exitProtocol_method_declaration = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#protocol_initializer_declaration.
CadenceParserListener.prototype.enterProtocol_initializer_declaration = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#protocol_initializer_declaration.
CadenceParserListener.prototype.exitProtocol_initializer_declaration = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#protocol_subscript_declaration.
CadenceParserListener.prototype.enterProtocol_subscript_declaration = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#protocol_subscript_declaration.
CadenceParserListener.prototype.exitProtocol_subscript_declaration = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#protocol_associated_type_declaration.
CadenceParserListener.prototype.enterProtocol_associated_type_declaration = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#protocol_associated_type_declaration.
CadenceParserListener.prototype.exitProtocol_associated_type_declaration = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#deinitializer_declaration.
CadenceParserListener.prototype.enterDeinitializer_declaration = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#deinitializer_declaration.
CadenceParserListener.prototype.exitDeinitializer_declaration = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#extension_declaration.
CadenceParserListener.prototype.enterExtension_declaration = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#extension_declaration.
CadenceParserListener.prototype.exitExtension_declaration = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#extension_body.
CadenceParserListener.prototype.enterExtension_body = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#extension_body.
CadenceParserListener.prototype.exitExtension_body = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#extension_members.
CadenceParserListener.prototype.enterExtension_members = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#extension_members.
CadenceParserListener.prototype.exitExtension_members = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#extension_member.
CadenceParserListener.prototype.enterExtension_member = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#extension_member.
CadenceParserListener.prototype.exitExtension_member = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#subscript_declaration.
CadenceParserListener.prototype.enterSubscript_declaration = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#subscript_declaration.
CadenceParserListener.prototype.exitSubscript_declaration = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#subscript_head.
CadenceParserListener.prototype.enterSubscript_head = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#subscript_head.
CadenceParserListener.prototype.exitSubscript_head = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#subscript_result.
CadenceParserListener.prototype.enterSubscript_result = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#subscript_result.
CadenceParserListener.prototype.exitSubscript_result = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#operator_declaration.
CadenceParserListener.prototype.enterOperator_declaration = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#operator_declaration.
CadenceParserListener.prototype.exitOperator_declaration = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#prefix_operator_declaration.
CadenceParserListener.prototype.enterPrefix_operator_declaration = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#prefix_operator_declaration.
CadenceParserListener.prototype.exitPrefix_operator_declaration = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#postfix_operator_declaration.
CadenceParserListener.prototype.enterPostfix_operator_declaration = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#postfix_operator_declaration.
CadenceParserListener.prototype.exitPostfix_operator_declaration = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#infix_operator_declaration.
CadenceParserListener.prototype.enterInfix_operator_declaration = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#infix_operator_declaration.
CadenceParserListener.prototype.exitInfix_operator_declaration = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#infix_operator_group.
CadenceParserListener.prototype.enterInfix_operator_group = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#infix_operator_group.
CadenceParserListener.prototype.exitInfix_operator_group = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#precedence_group_declaration.
CadenceParserListener.prototype.enterPrecedence_group_declaration = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#precedence_group_declaration.
CadenceParserListener.prototype.exitPrecedence_group_declaration = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#precedence_group_attributes.
CadenceParserListener.prototype.enterPrecedence_group_attributes = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#precedence_group_attributes.
CadenceParserListener.prototype.exitPrecedence_group_attributes = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#precedence_group_attribute.
CadenceParserListener.prototype.enterPrecedence_group_attribute = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#precedence_group_attribute.
CadenceParserListener.prototype.exitPrecedence_group_attribute = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#precedence_group_relation.
CadenceParserListener.prototype.enterPrecedence_group_relation = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#precedence_group_relation.
CadenceParserListener.prototype.exitPrecedence_group_relation = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#precedence_group_assignment.
CadenceParserListener.prototype.enterPrecedence_group_assignment = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#precedence_group_assignment.
CadenceParserListener.prototype.exitPrecedence_group_assignment = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#precedence_group_associativity.
CadenceParserListener.prototype.enterPrecedence_group_associativity = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#precedence_group_associativity.
CadenceParserListener.prototype.exitPrecedence_group_associativity = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#precedence_group_names.
CadenceParserListener.prototype.enterPrecedence_group_names = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#precedence_group_names.
CadenceParserListener.prototype.exitPrecedence_group_names = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#precedence_group_name.
CadenceParserListener.prototype.enterPrecedence_group_name = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#precedence_group_name.
CadenceParserListener.prototype.exitPrecedence_group_name = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#declaration_modifier.
CadenceParserListener.prototype.enterDeclaration_modifier = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#declaration_modifier.
CadenceParserListener.prototype.exitDeclaration_modifier = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#declaration_modifiers.
CadenceParserListener.prototype.enterDeclaration_modifiers = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#declaration_modifiers.
CadenceParserListener.prototype.exitDeclaration_modifiers = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#mutation_modifier.
CadenceParserListener.prototype.enterMutation_modifier = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#mutation_modifier.
CadenceParserListener.prototype.exitMutation_modifier = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#pattern.
CadenceParserListener.prototype.enterPattern = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#pattern.
CadenceParserListener.prototype.exitPattern = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#wildcard_pattern.
CadenceParserListener.prototype.enterWildcard_pattern = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#wildcard_pattern.
CadenceParserListener.prototype.exitWildcard_pattern = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#identifier_pattern.
CadenceParserListener.prototype.enterIdentifier_pattern = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#identifier_pattern.
CadenceParserListener.prototype.exitIdentifier_pattern = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#value_binding_pattern.
CadenceParserListener.prototype.enterValue_binding_pattern = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#value_binding_pattern.
CadenceParserListener.prototype.exitValue_binding_pattern = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#tuple_pattern.
CadenceParserListener.prototype.enterTuple_pattern = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#tuple_pattern.
CadenceParserListener.prototype.exitTuple_pattern = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#tuple_pattern_element_list.
CadenceParserListener.prototype.enterTuple_pattern_element_list = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#tuple_pattern_element_list.
CadenceParserListener.prototype.exitTuple_pattern_element_list = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#tuple_pattern_element.
CadenceParserListener.prototype.enterTuple_pattern_element = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#tuple_pattern_element.
CadenceParserListener.prototype.exitTuple_pattern_element = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#enum_case_pattern.
CadenceParserListener.prototype.enterEnum_case_pattern = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#enum_case_pattern.
CadenceParserListener.prototype.exitEnum_case_pattern = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#optional_pattern.
CadenceParserListener.prototype.enterOptional_pattern = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#optional_pattern.
CadenceParserListener.prototype.exitOptional_pattern = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#expression_pattern.
CadenceParserListener.prototype.enterExpression_pattern = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#expression_pattern.
CadenceParserListener.prototype.exitExpression_pattern = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#balanced_tokens.
CadenceParserListener.prototype.enterBalanced_tokens = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#balanced_tokens.
CadenceParserListener.prototype.exitBalanced_tokens = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#balanced_token.
CadenceParserListener.prototype.enterBalanced_token = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#balanced_token.
CadenceParserListener.prototype.exitBalanced_token = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#balanced_token_punctuation.
CadenceParserListener.prototype.enterBalanced_token_punctuation = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#balanced_token_punctuation.
CadenceParserListener.prototype.exitBalanced_token_punctuation = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#expression.
CadenceParserListener.prototype.enterExpression = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#expression.
CadenceParserListener.prototype.exitExpression = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#expression_list.
CadenceParserListener.prototype.enterExpression_list = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#expression_list.
CadenceParserListener.prototype.exitExpression_list = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#prefix_expression.
CadenceParserListener.prototype.enterPrefix_expression = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#prefix_expression.
CadenceParserListener.prototype.exitPrefix_expression = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#try_operator.
CadenceParserListener.prototype.enterTry_operator = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#try_operator.
CadenceParserListener.prototype.exitTry_operator = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#binary_expression.
CadenceParserListener.prototype.enterBinary_expression = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#binary_expression.
CadenceParserListener.prototype.exitBinary_expression = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#binary_expressions.
CadenceParserListener.prototype.enterBinary_expressions = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#binary_expressions.
CadenceParserListener.prototype.exitBinary_expressions = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#conditional_operator.
CadenceParserListener.prototype.enterConditional_operator = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#conditional_operator.
CadenceParserListener.prototype.exitConditional_operator = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#type_casting_operator.
CadenceParserListener.prototype.enterType_casting_operator = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#type_casting_operator.
CadenceParserListener.prototype.exitType_casting_operator = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#primary_expression.
CadenceParserListener.prototype.enterPrimary_expression = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#primary_expression.
CadenceParserListener.prototype.exitPrimary_expression = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#self_expression.
CadenceParserListener.prototype.enterSelf_expression = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#self_expression.
CadenceParserListener.prototype.exitSelf_expression = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#superclass_method_expression.
CadenceParserListener.prototype.enterSuperclass_method_expression = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#superclass_method_expression.
CadenceParserListener.prototype.exitSuperclass_method_expression = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#superclass_subscript_expression.
CadenceParserListener.prototype.enterSuperclass_subscript_expression = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#superclass_subscript_expression.
CadenceParserListener.prototype.exitSuperclass_subscript_expression = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#superclass_initializer_expression.
CadenceParserListener.prototype.enterSuperclass_initializer_expression = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#superclass_initializer_expression.
CadenceParserListener.prototype.exitSuperclass_initializer_expression = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#closure_expression.
CadenceParserListener.prototype.enterClosure_expression = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#closure_expression.
CadenceParserListener.prototype.exitClosure_expression = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#closure_signature.
CadenceParserListener.prototype.enterClosure_signature = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#closure_signature.
CadenceParserListener.prototype.exitClosure_signature = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#closure_parameter_clause.
CadenceParserListener.prototype.enterClosure_parameter_clause = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#closure_parameter_clause.
CadenceParserListener.prototype.exitClosure_parameter_clause = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#closure_parameter_list.
CadenceParserListener.prototype.enterClosure_parameter_list = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#closure_parameter_list.
CadenceParserListener.prototype.exitClosure_parameter_list = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#closure_parameter.
CadenceParserListener.prototype.enterClosure_parameter = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#closure_parameter.
CadenceParserListener.prototype.exitClosure_parameter = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#capture_list.
CadenceParserListener.prototype.enterCapture_list = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#capture_list.
CadenceParserListener.prototype.exitCapture_list = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#capture_list_items.
CadenceParserListener.prototype.enterCapture_list_items = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#capture_list_items.
CadenceParserListener.prototype.exitCapture_list_items = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#capture_list_item.
CadenceParserListener.prototype.enterCapture_list_item = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#capture_list_item.
CadenceParserListener.prototype.exitCapture_list_item = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#capture_specifier.
CadenceParserListener.prototype.enterCapture_specifier = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#capture_specifier.
CadenceParserListener.prototype.exitCapture_specifier = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#implicit_member_expression.
CadenceParserListener.prototype.enterImplicit_member_expression = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#implicit_member_expression.
CadenceParserListener.prototype.exitImplicit_member_expression = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#parenthesized_operator.
CadenceParserListener.prototype.enterParenthesized_operator = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#parenthesized_operator.
CadenceParserListener.prototype.exitParenthesized_operator = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#parenthesized_expression.
CadenceParserListener.prototype.enterParenthesized_expression = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#parenthesized_expression.
CadenceParserListener.prototype.exitParenthesized_expression = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#tuple_expression.
CadenceParserListener.prototype.enterTuple_expression = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#tuple_expression.
CadenceParserListener.prototype.exitTuple_expression = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#tuple_element_list.
CadenceParserListener.prototype.enterTuple_element_list = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#tuple_element_list.
CadenceParserListener.prototype.exitTuple_element_list = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#tuple_element.
CadenceParserListener.prototype.enterTuple_element = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#tuple_element.
CadenceParserListener.prototype.exitTuple_element = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#wildcard_expression.
CadenceParserListener.prototype.enterWildcard_expression = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#wildcard_expression.
CadenceParserListener.prototype.exitWildcard_expression = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#key_path_expression.
CadenceParserListener.prototype.enterKey_path_expression = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#key_path_expression.
CadenceParserListener.prototype.exitKey_path_expression = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#key_path_components.
CadenceParserListener.prototype.enterKey_path_components = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#key_path_components.
CadenceParserListener.prototype.exitKey_path_components = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#key_path_component.
CadenceParserListener.prototype.enterKey_path_component = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#key_path_component.
CadenceParserListener.prototype.exitKey_path_component = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#key_path_postfixes.
CadenceParserListener.prototype.enterKey_path_postfixes = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#key_path_postfixes.
CadenceParserListener.prototype.exitKey_path_postfixes = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#key_path_postfix.
CadenceParserListener.prototype.enterKey_path_postfix = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#key_path_postfix.
CadenceParserListener.prototype.exitKey_path_postfix = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#selector_expression.
CadenceParserListener.prototype.enterSelector_expression = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#selector_expression.
CadenceParserListener.prototype.exitSelector_expression = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#key_path_string_expression.
CadenceParserListener.prototype.enterKey_path_string_expression = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#key_path_string_expression.
CadenceParserListener.prototype.exitKey_path_string_expression = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#postfix_expression.
CadenceParserListener.prototype.enterPostfix_expression = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#postfix_expression.
CadenceParserListener.prototype.exitPostfix_expression = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#function_call_suffix.
CadenceParserListener.prototype.enterFunction_call_suffix = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#function_call_suffix.
CadenceParserListener.prototype.exitFunction_call_suffix = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#initializer_suffix.
CadenceParserListener.prototype.enterInitializer_suffix = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#initializer_suffix.
CadenceParserListener.prototype.exitInitializer_suffix = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#explicit_member_suffix.
CadenceParserListener.prototype.enterExplicit_member_suffix = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#explicit_member_suffix.
CadenceParserListener.prototype.exitExplicit_member_suffix = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#postfix_self_suffix.
CadenceParserListener.prototype.enterPostfix_self_suffix = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#postfix_self_suffix.
CadenceParserListener.prototype.exitPostfix_self_suffix = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#subscript_suffix.
CadenceParserListener.prototype.enterSubscript_suffix = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#subscript_suffix.
CadenceParserListener.prototype.exitSubscript_suffix = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#forced_value_suffix.
CadenceParserListener.prototype.enterForced_value_suffix = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#forced_value_suffix.
CadenceParserListener.prototype.exitForced_value_suffix = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#optional_chaining_suffix.
CadenceParserListener.prototype.enterOptional_chaining_suffix = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#optional_chaining_suffix.
CadenceParserListener.prototype.exitOptional_chaining_suffix = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#function_call_argument_clause.
CadenceParserListener.prototype.enterFunction_call_argument_clause = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#function_call_argument_clause.
CadenceParserListener.prototype.exitFunction_call_argument_clause = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#function_call_argument_list.
CadenceParserListener.prototype.enterFunction_call_argument_list = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#function_call_argument_list.
CadenceParserListener.prototype.exitFunction_call_argument_list = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#function_call_argument.
CadenceParserListener.prototype.enterFunction_call_argument = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#function_call_argument.
CadenceParserListener.prototype.exitFunction_call_argument = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#trailing_closures.
CadenceParserListener.prototype.enterTrailing_closures = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#trailing_closures.
CadenceParserListener.prototype.exitTrailing_closures = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#labeled_trailing_closures.
CadenceParserListener.prototype.enterLabeled_trailing_closures = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#labeled_trailing_closures.
CadenceParserListener.prototype.exitLabeled_trailing_closures = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#labeled_trailing_closure.
CadenceParserListener.prototype.enterLabeled_trailing_closure = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#labeled_trailing_closure.
CadenceParserListener.prototype.exitLabeled_trailing_closure = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#argument_names.
CadenceParserListener.prototype.enterArgument_names = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#argument_names.
CadenceParserListener.prototype.exitArgument_names = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#argument_name.
CadenceParserListener.prototype.enterArgument_name = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#argument_name.
CadenceParserListener.prototype.exitArgument_name = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#type.
CadenceParserListener.prototype.enterType = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#type.
CadenceParserListener.prototype.exitType = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#type_annotation.
CadenceParserListener.prototype.enterType_annotation = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#type_annotation.
CadenceParserListener.prototype.exitType_annotation = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#type_identifier.
CadenceParserListener.prototype.enterType_identifier = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#type_identifier.
CadenceParserListener.prototype.exitType_identifier = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#type_name.
CadenceParserListener.prototype.enterType_name = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#type_name.
CadenceParserListener.prototype.exitType_name = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#tuple_type.
CadenceParserListener.prototype.enterTuple_type = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#tuple_type.
CadenceParserListener.prototype.exitTuple_type = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#tuple_type_element_list.
CadenceParserListener.prototype.enterTuple_type_element_list = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#tuple_type_element_list.
CadenceParserListener.prototype.exitTuple_type_element_list = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#tuple_type_element.
CadenceParserListener.prototype.enterTuple_type_element = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#tuple_type_element.
CadenceParserListener.prototype.exitTuple_type_element = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#element_name.
CadenceParserListener.prototype.enterElement_name = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#element_name.
CadenceParserListener.prototype.exitElement_name = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#function_type.
CadenceParserListener.prototype.enterFunction_type = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#function_type.
CadenceParserListener.prototype.exitFunction_type = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#function_type_argument_clause.
CadenceParserListener.prototype.enterFunction_type_argument_clause = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#function_type_argument_clause.
CadenceParserListener.prototype.exitFunction_type_argument_clause = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#function_type_argument_list.
CadenceParserListener.prototype.enterFunction_type_argument_list = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#function_type_argument_list.
CadenceParserListener.prototype.exitFunction_type_argument_list = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#function_type_argument.
CadenceParserListener.prototype.enterFunction_type_argument = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#function_type_argument.
CadenceParserListener.prototype.exitFunction_type_argument = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#argument_label.
CadenceParserListener.prototype.enterArgument_label = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#argument_label.
CadenceParserListener.prototype.exitArgument_label = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#array_type.
CadenceParserListener.prototype.enterArray_type = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#array_type.
CadenceParserListener.prototype.exitArray_type = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#dictionary_type.
CadenceParserListener.prototype.enterDictionary_type = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#dictionary_type.
CadenceParserListener.prototype.exitDictionary_type = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#protocol_composition_type.
CadenceParserListener.prototype.enterProtocol_composition_type = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#protocol_composition_type.
CadenceParserListener.prototype.exitProtocol_composition_type = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#trailing_composition_and.
CadenceParserListener.prototype.enterTrailing_composition_and = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#trailing_composition_and.
CadenceParserListener.prototype.exitTrailing_composition_and = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#opaque_type.
CadenceParserListener.prototype.enterOpaque_type = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#opaque_type.
CadenceParserListener.prototype.exitOpaque_type = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#any_type.
CadenceParserListener.prototype.enterAny_type = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#any_type.
CadenceParserListener.prototype.exitAny_type = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#self_type.
CadenceParserListener.prototype.enterSelf_type = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#self_type.
CadenceParserListener.prototype.exitSelf_type = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#type_inheritance_clause.
CadenceParserListener.prototype.enterType_inheritance_clause = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#type_inheritance_clause.
CadenceParserListener.prototype.exitType_inheritance_clause = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#type_inheritance_list.
CadenceParserListener.prototype.enterType_inheritance_list = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#type_inheritance_list.
CadenceParserListener.prototype.exitType_inheritance_list = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#identifier.
CadenceParserListener.prototype.enterIdentifier = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#identifier.
CadenceParserListener.prototype.exitIdentifier = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#identifier_list.
CadenceParserListener.prototype.enterIdentifier_list = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#identifier_list.
CadenceParserListener.prototype.exitIdentifier_list = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#keyword.
CadenceParserListener.prototype.enterKeyword = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#keyword.
CadenceParserListener.prototype.exitKeyword = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#negate_prefix_operator.
CadenceParserListener.prototype.enterNegate_prefix_operator = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#negate_prefix_operator.
CadenceParserListener.prototype.exitNegate_prefix_operator = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#compilation_condition_AND.
CadenceParserListener.prototype.enterCompilation_condition_AND = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#compilation_condition_AND.
CadenceParserListener.prototype.exitCompilation_condition_AND = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#compilation_condition_OR.
CadenceParserListener.prototype.enterCompilation_condition_OR = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#compilation_condition_OR.
CadenceParserListener.prototype.exitCompilation_condition_OR = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#compilation_condition_GE.
CadenceParserListener.prototype.enterCompilation_condition_GE = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#compilation_condition_GE.
CadenceParserListener.prototype.exitCompilation_condition_GE = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#compilation_condition_L.
CadenceParserListener.prototype.enterCompilation_condition_L = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#compilation_condition_L.
CadenceParserListener.prototype.exitCompilation_condition_L = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#arrow_operator.
CadenceParserListener.prototype.enterArrow_operator = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#arrow_operator.
CadenceParserListener.prototype.exitArrow_operator = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#range_operator.
CadenceParserListener.prototype.enterRange_operator = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#range_operator.
CadenceParserListener.prototype.exitRange_operator = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#same_type_equals.
CadenceParserListener.prototype.enterSame_type_equals = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#same_type_equals.
CadenceParserListener.prototype.exitSame_type_equals = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#binary_operator.
CadenceParserListener.prototype.enterBinary_operator = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#binary_operator.
CadenceParserListener.prototype.exitBinary_operator = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#prefix_operator.
CadenceParserListener.prototype.enterPrefix_operator = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#prefix_operator.
CadenceParserListener.prototype.exitPrefix_operator = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#postfix_operator.
CadenceParserListener.prototype.enterPostfix_operator = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#postfix_operator.
CadenceParserListener.prototype.exitPostfix_operator = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#operator.
CadenceParserListener.prototype.enterOperator = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#operator.
CadenceParserListener.prototype.exitOperator = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#operator_head.
CadenceParserListener.prototype.enterOperator_head = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#operator_head.
CadenceParserListener.prototype.exitOperator_head = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#operator_character.
CadenceParserListener.prototype.enterOperator_character = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#operator_character.
CadenceParserListener.prototype.exitOperator_character = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#operator_characters.
CadenceParserListener.prototype.enterOperator_characters = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#operator_characters.
CadenceParserListener.prototype.exitOperator_characters = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#dot_operator_head.
CadenceParserListener.prototype.enterDot_operator_head = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#dot_operator_head.
CadenceParserListener.prototype.exitDot_operator_head = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#dot_operator_character.
CadenceParserListener.prototype.enterDot_operator_character = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#dot_operator_character.
CadenceParserListener.prototype.exitDot_operator_character = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#dot_operator_characters.
CadenceParserListener.prototype.enterDot_operator_characters = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#dot_operator_characters.
CadenceParserListener.prototype.exitDot_operator_characters = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#literal.
CadenceParserListener.prototype.enterLiteral = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#literal.
CadenceParserListener.prototype.exitLiteral = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#numeric_literal.
CadenceParserListener.prototype.enterNumeric_literal = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#numeric_literal.
CadenceParserListener.prototype.exitNumeric_literal = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#boolean_literal.
CadenceParserListener.prototype.enterBoolean_literal = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#boolean_literal.
CadenceParserListener.prototype.exitBoolean_literal = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#nil_literal.
CadenceParserListener.prototype.enterNil_literal = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#nil_literal.
CadenceParserListener.prototype.exitNil_literal = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#integer_literal.
CadenceParserListener.prototype.enterInteger_literal = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#integer_literal.
CadenceParserListener.prototype.exitInteger_literal = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#string_literal.
CadenceParserListener.prototype.enterString_literal = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#string_literal.
CadenceParserListener.prototype.exitString_literal = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#extended_string_literal.
CadenceParserListener.prototype.enterExtended_string_literal = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#extended_string_literal.
CadenceParserListener.prototype.exitExtended_string_literal = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#static_string_literal.
CadenceParserListener.prototype.enterStatic_string_literal = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#static_string_literal.
CadenceParserListener.prototype.exitStatic_string_literal = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#interpolated_string_literal.
CadenceParserListener.prototype.enterInterpolated_string_literal = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#interpolated_string_literal.
CadenceParserListener.prototype.exitInterpolated_string_literal = function(ctx) {
};



exports.CadenceParserListener = CadenceParserListener;