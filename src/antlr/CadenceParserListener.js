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


// Enter a parse tree produced by CadenceParser#parameter_name.
CadenceParserListener.prototype.enterParameter_name = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#parameter_name.
CadenceParserListener.prototype.exitParameter_name = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#negate_prefix_operator.
CadenceParserListener.prototype.enterNegate_prefix_operator = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#negate_prefix_operator.
CadenceParserListener.prototype.exitNegate_prefix_operator = function(ctx) {
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


// Enter a parse tree produced by CadenceParser#postfix_expression.
CadenceParserListener.prototype.enterPostfix_expression = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#postfix_expression.
CadenceParserListener.prototype.exitPostfix_expression = function(ctx) {
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


// Enter a parse tree produced by CadenceParser#object_expression.
CadenceParserListener.prototype.enterObject_expression = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#object_expression.
CadenceParserListener.prototype.exitObject_expression = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#object_access.
CadenceParserListener.prototype.enterObject_access = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#object_access.
CadenceParserListener.prototype.exitObject_access = function(ctx) {
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


// Enter a parse tree produced by CadenceParser#assignment_operator.
CadenceParserListener.prototype.enterAssignment_operator = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#assignment_operator.
CadenceParserListener.prototype.exitAssignment_operator = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#compilation_condition.
CadenceParserListener.prototype.enterCompilation_condition = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#compilation_condition.
CadenceParserListener.prototype.exitCompilation_condition = function(ctx) {
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


// Enter a parse tree produced by CadenceParser#compilation_condition_NOT.
CadenceParserListener.prototype.enterCompilation_condition_NOT = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#compilation_condition_NOT.
CadenceParserListener.prototype.exitCompilation_condition_NOT = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#compilation_condition_ET.
CadenceParserListener.prototype.enterCompilation_condition_ET = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#compilation_condition_ET.
CadenceParserListener.prototype.exitCompilation_condition_ET = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#compilation_condition_GE.
CadenceParserListener.prototype.enterCompilation_condition_GE = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#compilation_condition_GE.
CadenceParserListener.prototype.exitCompilation_condition_GE = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#compilation_condition_LE.
CadenceParserListener.prototype.enterCompilation_condition_LE = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#compilation_condition_LE.
CadenceParserListener.prototype.exitCompilation_condition_LE = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#compilation_condition_G.
CadenceParserListener.prototype.enterCompilation_condition_G = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#compilation_condition_G.
CadenceParserListener.prototype.exitCompilation_condition_G = function(ctx) {
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


// Enter a parse tree produced by CadenceParser#declaration.
CadenceParserListener.prototype.enterDeclaration = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#declaration.
CadenceParserListener.prototype.exitDeclaration = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#contract_declaration.
CadenceParserListener.prototype.enterContract_declaration = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#contract_declaration.
CadenceParserListener.prototype.exitContract_declaration = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#resource_interface_declaration.
CadenceParserListener.prototype.enterResource_interface_declaration = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#resource_interface_declaration.
CadenceParserListener.prototype.exitResource_interface_declaration = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#resource_implementation_declaration.
CadenceParserListener.prototype.enterResource_implementation_declaration = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#resource_implementation_declaration.
CadenceParserListener.prototype.exitResource_implementation_declaration = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#resource_implementation_definition.
CadenceParserListener.prototype.enterResource_implementation_definition = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#resource_implementation_definition.
CadenceParserListener.prototype.exitResource_implementation_definition = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#struct_interface_declaration.
CadenceParserListener.prototype.enterStruct_interface_declaration = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#struct_interface_declaration.
CadenceParserListener.prototype.exitStruct_interface_declaration = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#struct_implementation_declaration.
CadenceParserListener.prototype.enterStruct_implementation_declaration = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#struct_implementation_declaration.
CadenceParserListener.prototype.exitStruct_implementation_declaration = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#constant_declaration.
CadenceParserListener.prototype.enterConstant_declaration = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#constant_declaration.
CadenceParserListener.prototype.exitConstant_declaration = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#function_declaration.
CadenceParserListener.prototype.enterFunction_declaration = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#function_declaration.
CadenceParserListener.prototype.exitFunction_declaration = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#phase_declaration.
CadenceParserListener.prototype.enterPhase_declaration = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#phase_declaration.
CadenceParserListener.prototype.exitPhase_declaration = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#pre_phase_head.
CadenceParserListener.prototype.enterPre_phase_head = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#pre_phase_head.
CadenceParserListener.prototype.exitPre_phase_head = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#execute_phase_head.
CadenceParserListener.prototype.enterExecute_phase_head = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#execute_phase_head.
CadenceParserListener.prototype.exitExecute_phase_head = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#post_phase_head.
CadenceParserListener.prototype.enterPost_phase_head = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#post_phase_head.
CadenceParserListener.prototype.exitPost_phase_head = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#transaction_phase_head.
CadenceParserListener.prototype.enterTransaction_phase_head = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#transaction_phase_head.
CadenceParserListener.prototype.exitTransaction_phase_head = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#prepare_phase_head.
CadenceParserListener.prototype.enterPrepare_phase_head = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#prepare_phase_head.
CadenceParserListener.prototype.exitPrepare_phase_head = function(ctx) {
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


// Enter a parse tree produced by CadenceParser#variable_body.
CadenceParserListener.prototype.enterVariable_body = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#variable_body.
CadenceParserListener.prototype.exitVariable_body = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#event_declaration.
CadenceParserListener.prototype.enterEvent_declaration = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#event_declaration.
CadenceParserListener.prototype.exitEvent_declaration = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#event_declaration_head.
CadenceParserListener.prototype.enterEvent_declaration_head = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#event_declaration_head.
CadenceParserListener.prototype.exitEvent_declaration_head = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#event_body.
CadenceParserListener.prototype.enterEvent_body = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#event_body.
CadenceParserListener.prototype.exitEvent_body = function(ctx) {
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


// Enter a parse tree produced by CadenceParser#declarations.
CadenceParserListener.prototype.enterDeclarations = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#declarations.
CadenceParserListener.prototype.exitDeclarations = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#code_block.
CadenceParserListener.prototype.enterCode_block = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#code_block.
CadenceParserListener.prototype.exitCode_block = function(ctx) {
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


// Enter a parse tree produced by CadenceParser#access_level_modifier.
CadenceParserListener.prototype.enterAccess_level_modifier = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#access_level_modifier.
CadenceParserListener.prototype.exitAccess_level_modifier = function(ctx) {
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


// Enter a parse tree produced by CadenceParser#check_statement.
CadenceParserListener.prototype.enterCheck_statement = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#check_statement.
CadenceParserListener.prototype.exitCheck_statement = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#check_statement_conditions.
CadenceParserListener.prototype.enterCheck_statement_conditions = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#check_statement_conditions.
CadenceParserListener.prototype.exitCheck_statement_conditions = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#check_statement_message.
CadenceParserListener.prototype.enterCheck_statement_message = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#check_statement_message.
CadenceParserListener.prototype.exitCheck_statement_message = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#control_transfer_statement.
CadenceParserListener.prototype.enterControl_transfer_statement = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#control_transfer_statement.
CadenceParserListener.prototype.exitControl_transfer_statement = function(ctx) {
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


// Enter a parse tree produced by CadenceParser#variable_name.
CadenceParserListener.prototype.enterVariable_name = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#variable_name.
CadenceParserListener.prototype.exitVariable_name = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#identifier.
CadenceParserListener.prototype.enterIdentifier = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#identifier.
CadenceParserListener.prototype.exitIdentifier = function(ctx) {
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


// Enter a parse tree produced by CadenceParser#type.
CadenceParserListener.prototype.enterType = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#type.
CadenceParserListener.prototype.exitType = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#function_type.
CadenceParserListener.prototype.enterFunction_type = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#function_type.
CadenceParserListener.prototype.exitFunction_type = function(ctx) {
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


// Enter a parse tree produced by CadenceParser#type_name_alias.
CadenceParserListener.prototype.enterType_name_alias = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#type_name_alias.
CadenceParserListener.prototype.exitType_name_alias = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#composite_types.
CadenceParserListener.prototype.enterComposite_types = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#composite_types.
CadenceParserListener.prototype.exitComposite_types = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#any_type.
CadenceParserListener.prototype.enterAny_type = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#any_type.
CadenceParserListener.prototype.exitAny_type = function(ctx) {
};


// Enter a parse tree produced by CadenceParser#label_name.
CadenceParserListener.prototype.enterLabel_name = function(ctx) {
};

// Exit a parse tree produced by CadenceParser#label_name.
CadenceParserListener.prototype.exitLabel_name = function(ctx) {
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



exports.CadenceParserListener = CadenceParserListener;